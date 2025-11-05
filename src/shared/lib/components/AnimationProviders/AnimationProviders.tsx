import React, { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationPayload {
    isLoaded?: boolean;
    Spring?: SpringType;
    Gesture?: GestureType;
}

const getAnimationLib = async () => Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);

export const AnimationContext = createContext<AnimationPayload>({});

const AnimationProviders = ({ children }: { children: ReactNode }) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAnimationLib().then(([spring, gesture]) => {
            SpringRef.current = spring;
            GestureRef.current = gesture;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo<AnimationPayload>(
        () => ({
            isLoaded,
            Spring: SpringRef.current,
            Gesture: GestureRef.current,
        }),
        [isLoaded],
    );

    return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
};

export default AnimationProviders;
export const useAnimationLib = () => useContext(AnimationContext) as Required<AnimationPayload>;
