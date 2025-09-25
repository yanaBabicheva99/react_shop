import React, { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Text } from '../Text/Text';
import cls from './Modal.module.scss';

interface ModalProps {
    title?: string;
    isOpen: boolean;
    className?: string;
    onClose: () => void;
    lazy?: boolean;
    children: ReactNode;
    animationDelay?: number;
}

export const Modal = (props: ModalProps) => {
    const {
        title,
        isOpen,
        onClose,
        children,
        className,
        lazy,
        animationDelay = 300,
    } = props;

    const {
        isOpened, isClosed, isMounted, closeHandler,
    } = useModal({
        animationDelay,
        isOpen,
        onClose,
    });

    if (lazy && !isMounted) {
        return null;
    }

    const mods = {
        [cls.opened]: isOpened,
        [cls.closed]: isClosed,
    };

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <Overlay onClickHandler={closeHandler} />
            <div className={classNames(cls.content)}>
                {title && <Text title={title} className={cls.title} /> }
                {children}
            </div>
        </div>
    );
};
