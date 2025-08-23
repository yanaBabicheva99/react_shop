import {
    useEffect, useLayoutEffect, useMemo, useState,
} from 'react';

interface UseFixedSizeListProps {
    itemsCount: number;
    itemHeight: number;
    listHeight: number;
    overscan?: number;
    scrollingDelay?: number;
    getScrollElement: () => HTMLElement | null;
}

const DEFAULT_OVERSCAN = 3;
const DEFAULT_SCROLLING_DELAY = 150;

export function useFixedSizeList(props: UseFixedSizeListProps) {
    const {
        itemHeight,
        itemsCount,
        scrollingDelay = DEFAULT_SCROLLING_DELAY,
        overscan = DEFAULT_OVERSCAN,
        listHeight,
        getScrollElement,
    } = props;

    const [scrollTop, setScrollTop] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

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

    const { virtualItems, startIndex, endIndex } = useMemo(() => {
        const rangeStart = scrollTop;
        const rangeEnd = scrollTop + listHeight;

        let startIndex = Math.floor(rangeStart / itemHeight);
        let endIndex = Math.ceil(rangeEnd / itemHeight);

        startIndex = Math.max(0, startIndex - overscan);
        endIndex = Math.min(itemsCount - 1, endIndex + overscan);

        const virtualItems = [];

        for (let index = startIndex; index <= endIndex; index += 1) {
            virtualItems.push({
                index,
                offsetTop: index * itemHeight,
            });
        }
        return { virtualItems, startIndex, endIndex };
    }, [scrollTop, listHeight, itemHeight, overscan, itemsCount]);

    const totalHeight = itemHeight * itemsCount;

    return {
        virtualItems,
        totalHeight,
        startIndex,
        endIndex,
        isScrolling,
    };
}
