import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted'
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton;
    className?: string;
    square?: boolean;
    size?: SizeButton;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        theme = ThemeButton.CLEAR,
        className,
        square = false,
        size = SizeButton.M,
        disabled,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(
                cls.Button,
                {
                    [cls.square]: square,
                    [cls.disabled]: disabled,
                },
                [className, cls[theme], cls[size]],
            )}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
