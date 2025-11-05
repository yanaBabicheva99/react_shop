import { ChangeEventHandler, SelectHTMLAttributes, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T> {
    value: T;
    content: string;
}

interface SelectProps<T> extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    className?: string;
    label?: string;
    onChange: (value: T) => void;
    options: SelectOption<T>[];
    readOnly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, onChange, value, options, label, readOnly } = props;

    const changeHandler: ChangeEventHandler<HTMLSelectElement> = useCallback(
        (event) => {
            onChange(event.target.value as T);
        },
        [onChange],
    );

    const optionsList = useMemo(
        () =>
            options.map((option) => (
                <option key={option.value} value={option.value} className={cls.option}>
                    {option.content}
                </option>
            )),
        [options],
    );

    return (
        <div className={classNames(cls.SelectWrapper, { [cls.readOnly]: readOnly }, [className])}>
            {label && <span className={cls.label}>{`${label} >`}</span>}
            <select value={value} onChange={changeHandler} className={cls.select} disabled={readOnly}>
                {optionsList}
            </select>
        </div>
    );
};
