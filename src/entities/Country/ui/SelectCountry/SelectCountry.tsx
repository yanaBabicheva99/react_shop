import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/Country';

interface SelectCurrencyProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
}

const options = Object.keys(Country).map((item) => ({
    value: item,
    content: item,
}));

export const SelectCountry = memo((props: SelectCurrencyProps) => {
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
        <ListBox<Country>
            label={t('Страна')}
            options={options}
            value={value}
            onChange={handleChange}
            readonly={readOnly}
            direction="top left"
            className={className}
        />
    );
});
