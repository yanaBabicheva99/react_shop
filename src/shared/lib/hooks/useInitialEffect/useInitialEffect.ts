import { useEffect } from 'react';

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (__Project__ !== 'storybook') {
            callback();
        }
    }, []);
}
