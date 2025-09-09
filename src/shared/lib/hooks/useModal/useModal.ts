import {
    MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
    isOpen?: boolean;
    animationDelay: number;
    onClose?: () => void;
}

export function useModal({ animationDelay, isOpen, onClose }: UseModalProps) {
    const [isClosed, setIsClosed] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timerRefOpened = useRef() as MutableRefObject<ReturnType<typeof setTimeout> | undefined>;
    const timerRefClosed = useRef() as MutableRefObject<ReturnType<typeof setTimeout> | undefined>;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            timerRefOpened.current = setTimeout(() => {
                setIsOpened(true);
            }, animationDelay);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        setIsClosed(true);
        timerRefClosed.current = setTimeout(() => {
            setIsClosed(false);
            setIsOpened(false);
            setIsMounted(false);
            onClose?.();
        }, animationDelay);
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', (e) => {
                onKeyDown(e);
            });
        }
    }, [isOpen, onKeyDown]);

    useEffect(() => () => {
        clearTimeout(timerRefClosed?.current);
        clearTimeout(timerRefOpened?.current);
        window.removeEventListener('keydown', (e) => {
            onKeyDown(e);
        });
    }, []);

    return {
        isClosed,
        isOpened,
        isMounted,
        closeHandler,
    };
}
