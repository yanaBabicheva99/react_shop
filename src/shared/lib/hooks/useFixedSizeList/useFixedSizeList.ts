import {
    useCallback,
    useEffect, useLayoutEffect, useMemo, useState,
} from 'react';

type Key = string | number;

interface UseFixedSizeListProps {
    itemsCount: number;
    itemHeight?: (index: number) => number;
    estimateItemHeight?: (index: number) => number;
    getItemKey: (index: number) => Key;
    overscan?: number;
    scrollingDelay?: number;
    getScrollElement: () => HTMLElement | null;
}

const DEFAULT_OVERSCAN = 3;
const DEFAULT_SCROLLING_DELAY = 150;

function validateProps(props: UseFixedSizeListProps) {
    const { itemHeight, estimateItemHeight } = props;

    if (!itemHeight && !estimateItemHeight) {
        throw new Error('you must pass either "itemHeight" or "estimateItemHeight" prop');
    }
}

export function useFixedSizeList(props: UseFixedSizeListProps) {
    validateProps(props);
    const {
        itemHeight,
        itemsCount,
        estimateItemHeight,
        getItemKey,
        scrollingDelay = DEFAULT_SCROLLING_DELAY,
        overscan = DEFAULT_OVERSCAN,
        // listHeight,
        getScrollElement,
    } = props;

    const [measurementCache, setMeasurementCache] = useState<Record<Key, number>>({});
    const [scrollTop, setScrollTop] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [listHeight, setListHeight] = useState(0);

    useLayoutEffect(() => {
        const scrollElement = getScrollElement();
        if (!scrollElement) return;

        const resizeObserver = new ResizeObserver(([entry]) => {
            if (!entry) return;
            const height = entry.borderBoxSize[0].blockSize ?? entry.target.getBoundingClientRect().height;
            setListHeight(height);
        });

        resizeObserver.observe(scrollElement);

        return () => {
            resizeObserver.disconnect();
        };
    }, [getScrollElement]);

    useLayoutEffect(() => {
        const scrollElement = getScrollElement();

        if (!scrollElement) {
            return;
        }

        const handleScroll = () => {
            const { scrollTop } = scrollElement;
            setScrollTop(scrollTop);
        };

        handleScroll();

        scrollElement.addEventListener('scroll', handleScroll);

        // eslint-disable-next-line consistent-return
        return () => scrollElement.removeEventListener('scroll', handleScroll);
    }, [getScrollElement]);

    useEffect(() => {
        const element = getScrollElement();
        let timer: null | ReturnType<typeof setTimeout> = null;

        if (!element) return;

        const handleScroll = () => {
            setIsScrolling(true);

            if (typeof timer === 'number') {
                clearTimeout(timer);
            }

            timer = setTimeout(() => {
                setIsScrolling(false);
            }, scrollingDelay);
        };

        element.addEventListener('scroll', handleScroll);

        // eslint-disable-next-line consistent-return
        return () => element.removeEventListener('scroll', handleScroll);
    }, [getScrollElement, scrollingDelay]);

    const {
        virtualItems, startIndex, endIndex, totalHeight, allItems,
    } = useMemo(() => {
        const getItemHeight = (index: number) => {
            if (itemHeight) {
                return itemHeight(index);
            }

            const key = getItemKey(index);

            if (typeof measurementCache[key] === 'number') {
                return measurementCache[key]!;
            }

            return estimateItemHeight!(index);
        };
        const rangeStart = scrollTop;
        const rangeEnd = scrollTop + listHeight;
        const allItems = Array(itemsCount);

        let startIndex = -1;
        let endIndex = -1;
        let totalHeight = 0;

        for (let index = 0; index < itemsCount; index += 1) {
            const key = getItemKey(index);
            const row = {
                key,
                index,
                height: getItemHeight(index),
                offsetTop: totalHeight,
            };

            totalHeight += row.height;
            allItems[index] = row;

            if (startIndex === -1 && row.offsetTop + row.height > rangeStart) {
                startIndex = Math.max(index, index - overscan);
            }

            if (endIndex === -1 && row.offsetTop + row.height >= rangeEnd) {
                endIndex = Math.min(itemsCount - 1, index + overscan);
            }
        }

        const virtualItems = allItems.slice(startIndex, endIndex + 1);

        return {
            virtualItems, startIndex, endIndex, allItems, totalHeight,
        };
    }, [scrollTop, listHeight, itemHeight, overscan, itemsCount, estimateItemHeight, measurementCache]);

    const measureElement = useCallback((element: Element | null) => {
        if (!element) return;
        const indexAttribute = element.getAttribute(('data-index')) || '';
        const index = parseInt(indexAttribute, 10);
        if (Number.isNaN(index)) {
            console.error('Dynamic element must have a valid data-index attribute');
        }
        const size = element.getBoundingClientRect();
        const key = getItemKey(index);
        setMeasurementCache((cache) => ({ ...cache, [key]: size.height }));
    }, []);

    console.log(measurementCache);

    return {
        virtualItems,
        totalHeight,
        startIndex,
        endIndex,
        isScrolling,
        allItems,
        measureElement,
    };
}
