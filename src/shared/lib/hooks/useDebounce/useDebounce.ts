import { MutableRefObject, useCallback, useRef } from 'react';

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
    const timer = useRef(null) as MutableRefObject<ReturnType<typeof setTimeout> | null>;
    return useCallback((...args) => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            callback(args);
        }, delay);
    }, [callback, delay]);
};
