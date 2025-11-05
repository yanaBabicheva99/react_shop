import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINE = 'outline',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    fullWidth?: boolean;
}

export const Card = (props: CardProps) => {
    const { className, children, theme = CardTheme.NORMAL, fullWidth, ...otherProps } = props;

    return (
        <div {...otherProps} className={classNames(cls.Card, { [cls.fullWidth]: fullWidth }, [className, cls[theme]])}>
            {children}
        </div>
    );
};
