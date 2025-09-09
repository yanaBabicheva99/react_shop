import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/Popups';
import { DropdownDirection } from 'shared/types/ui';
import { Country } from '../../model/types/Country';

interface SelectCurrencyProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
    direction?: DropdownDirection;
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
        direction = 'top left',
    } = props;

    const { t } = useTranslation();

    const handleChange = useCallback((value: Country) => {
        onChange?.(value);
    }, [onChange]);

    return (
        <ListBox<Country>
            label={t('Страна')}
            options={options}
            value={value}
            onChange={handleChange}
            readonly={readOnly}
            direction={direction}
            className={className}
        />
    );
});
