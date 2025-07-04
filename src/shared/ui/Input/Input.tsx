import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>{
    className?: string;
    value: string;
    onChange?: (v: string) => void;
    autoFocus?: boolean;
}

export const Input = (props: InputProps) => {
    const {
        value,
        onChange,
        type = 'text',
        placeholder,
        className,
        autoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
        if (autoFocus) {
            ref.current.focus();
        }
    }, [autoFocus]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <span className={cls.placeholder}>
                    {`${placeholder} >`}
                </span>
            )}
            <input
                type={type}
                value={value}
                onChange={handleChange}
                className={cls.input}
                ref={ref}
                {...otherProps}
            />
        </div>
    );
};
