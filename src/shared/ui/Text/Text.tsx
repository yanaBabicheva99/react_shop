import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    left = 'left',
    right = 'right',
    center = 'center'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme,
    textAlign?: TextAlign;
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        textAlign = TextAlign.left,
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[textAlign]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
