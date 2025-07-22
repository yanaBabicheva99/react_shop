import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ChangeEvent, InputHTMLAttributes, memo, useCallback, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>{
    className?: string;
    value?: string | number;
    onChange?: (v: string) => void;
    autoFocus?: boolean;
    onlyNumber?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        value,
        onChange,
        type = 'text',
        placeholder,
        className,
        autoFocus,
        onlyNumber,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            ref?.current?.focus();
        }
    }, [autoFocus, props.readOnly]);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (onlyNumber) {
            onChange?.(e.target.value.replace(/[^0-9]/, ''));
            return;
        }
        onChange?.(e.target.value);
    }, [onChange, onlyNumber]);

    const mods = {
        [cls.readOnly]: props.readOnly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <span className={cls.placeholder}>
                    {`${placeholder} >`}
                </span>
            )}
            <input
                type={type}
                value={value || ''}
                onChange={handleChange}
                className={cls.input}
                ref={ref}
                {...otherProps}
            />
        </div>
    );
});
