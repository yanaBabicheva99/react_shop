import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    FC, useEffect, useRef, useState, useCallback,
} from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    className?: string;
    onClose: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
    const {
        isOpen,
        onClose,
        children,
        className,
    } = props;

    const [isClosed, setIsClosed] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

    const mods = {
        [cls.opened]: isOpen,
        [cls.closed]: isClosed,
    };

    const closeHandler = useCallback(() => {
        setIsClosed(true);
        timerRef.current = setTimeout(() => {
            setIsClosed(false);
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
        clearTimeout(timerRef?.current);
        window.removeEventListener('keydown', (e) => {
            onKeyDown(e);
        });
    }, []);

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={classNames(cls.overlay)} onClick={closeHandler}>
                <div className={classNames(cls.content)} onClick={contentClickHandler}>
                    {children}
                </div>
            </div>
        </div>
    );
};
