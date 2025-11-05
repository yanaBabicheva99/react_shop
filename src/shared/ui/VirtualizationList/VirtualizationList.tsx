import React, { useCallback, useRef, useState } from 'react';
import { useFixedSizeList } from '@/shared/lib/hooks/useFixedSizeList/useFixedSizeList';

const items = Array.from({ length: 10000 }, (_, index) => ({
    id: Math.random().toString(36).slice(2),
    text: String(index),
}));

export const VirtualizationList = () => {
    const [listItems] = useState(items);
    const refElement = useRef<null | HTMLDivElement>(null);

    const containerHeight = 600;

    const { isScrolling, virtualItems, totalHeight, measureElement } = useFixedSizeList({
        getItemKey: useCallback((index) => listItems[index].id, [listItems]),
        estimateItemHeight: useCallback(() => 40, []),
        itemsCount: listItems.length,
        getScrollElement: useCallback(() => refElement.current, []),
    });

    return (
        <div
            ref={refElement}
            style={{
                height: containerHeight,
                overflowY: 'auto',
                position: 'relative',
            }}
        >
            <div style={{ height: totalHeight }}>
                {virtualItems.map((vertial) => {
                    const item = listItems[vertial.index];
                    return (
                        <div
                            ref={measureElement}
                            style={{
                                position: 'absolute',
                                top: 0,
                                transform: `translateY(${vertial.offsetTop}px)`,
                            }}
                            key={item.id}
                            data-index={vertial.index}
                        >
                            {isScrolling ? 'scrolling' : item.text}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
