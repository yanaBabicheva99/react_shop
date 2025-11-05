import { MutableRefObject, useEffect } from 'react';

interface UseInfinityScrollOption {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfinityScroll({ callback, triggerRef, wrapperRef }: UseInfinityScrollOption) {
    useEffect(() => {
        const triggerElement = triggerRef.current;
        const wrapperElement = wrapperRef.current;
        let observer: IntersectionObserver | null = null;
        if (callback && wrapperElement && triggerElement) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                scrollMargin: '0px',
                threshold: 0.1,
            };

            observer = new IntersectionObserver(([entry]) => {
                console.log('SCROLL', entry);
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }
        return () => {
            if (observer && triggerElement) {
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
