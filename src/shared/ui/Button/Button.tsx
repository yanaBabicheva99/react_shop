import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton;
    className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        theme = ThemeButton.CLEAR,
        className,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
