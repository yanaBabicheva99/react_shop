import { useEffect } from 'react';

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (__Project__ !== 'storybook' && __Project__ !== 'jest') {
            callback();
        }
    }, []);
}
