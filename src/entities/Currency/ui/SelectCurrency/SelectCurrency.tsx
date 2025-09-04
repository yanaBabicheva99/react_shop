import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { DropdownDirection } from 'shared/types/ui';

import { Currency } from '../../model/consts/currencyConsts';

interface SelectCurrencyProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?: boolean;
    direction?: DropdownDirection;
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
        direction = 'top left',
    } = props;

    const { t } = useTranslation();

    const handleChange = useCallback((value: Currency) => {
        onChange?.(value);
    }, [onChange]);

    return (
        <ListBox<Currency>
            label={t('Валюта')}
            value={value}
            readonly={readOnly}
            onChange={handleChange}
            options={options}
            className={className}
            direction={direction}
        />
    );
});
