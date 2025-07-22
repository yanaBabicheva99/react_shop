import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEventHandler, memo, SelectHTMLAttributes, useCallback, useMemo,
} from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' > {
    className?: string;
    label?: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    readOnly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        onChange,
        value,
        options,
        label,
        readOnly,
    } = props;

    const changeHandler: ChangeEventHandler<HTMLSelectElement> = useCallback((event) => {
        onChange(event.target.value);
    }, [onChange]);

    const optionsList = useMemo(() => options.map((option) => (
        <option
            key={option.value}
            value={option.value}
            className={cls.option}
        >
            {option.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.SelectWrapper, { [cls.readOnly]: readOnly }, [className])}>
            {label && (
                <span className={cls.label}>{`${label} >`}</span>
            )}
            <select
                value={value}
                onChange={changeHandler}
                className={cls.select}
                disabled={readOnly}
            >
                {optionsList}
            </select>
        </div>
    );
});
