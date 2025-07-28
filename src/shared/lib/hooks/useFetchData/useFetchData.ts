import { useEffect } from 'react';

export function useFetchData(callback: () => void) {
    useEffect(() => {
        if (__Project__ !== 'storybook') {
            callback();
        }
    }, []);
}
