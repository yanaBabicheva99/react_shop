import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    FC, useEffect, useRef, useState, useCallback, MutableRefObject,
} from 'react';
import { Text } from 'shared/ui/Text/Text';
import cls from './Modal.module.scss';

interface ModalProps {
    title?: string;
    isOpen: boolean;
    className?: string;
    onClose: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY_OPENED = 100;
const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
    const {
        title,
        isOpen,
        onClose,
        children,
        className,
        lazy,
    } = props;

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
            }, ANIMATION_DELAY_OPENED);
        }
    }, [isOpen]);

    const mods = {
        [cls.opened]: isOpened,
        [cls.closed]: isClosed,
    };

    const closeHandler = useCallback(() => {
        setIsClosed(true);
        timerRefClosed.current = setTimeout(() => {
            setIsClosed(false);
            setIsOpened(false);
            setIsMounted(false);
            onClose();
        }, ANIMATION_DELAY);
    }, [onClose]);

    const contentClickHandler = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

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

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={classNames(cls.overlay)} onClick={closeHandler}>
                <div className={classNames(cls.content)} onClick={contentClickHandler}>
                    {title && <Text title={title} className={cls.title} /> }
                    {children}
                </div>
            </div>
        </div>
    );
};
