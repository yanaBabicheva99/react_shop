import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/Currency';

interface SelectCurrencyProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?: boolean;
}

const options = Object.keys(Currency).map((item) => ({
    value: item,
    content: item,
}));

export const SelectCurrency = memo((props: SelectCurrencyProps) => {
    const {
        className,
        value,
        onChange,
        readOnly,
    } = props;

    const { t } = useTranslation();

    const handleChange = useCallback((value) => {
        onChange?.(value);
    }, [onChange]);

    return (
        <div className={classNames('', {}, [className])}>
            <Select
                label={t('Валюта')}
                value={value}
                readOnly={readOnly}
                onChange={handleChange}
                options={options}
            />
        </div>
    );
});
