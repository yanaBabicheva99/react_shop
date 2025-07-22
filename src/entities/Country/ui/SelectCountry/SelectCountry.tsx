import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
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
        <div className={classNames('', {}, [className])}>
            <Select
                label={t('Страна')}
                value={value}
                readOnly={readOnly}
                onChange={handleChange}
                options={options}
            />
        </div>
    );
});
