import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { memo } from 'react';
import { Currency, SelectCurrency } from 'entities/Currency';
import { Country, SelectCountry } from 'entities/Country';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { VStack } from 'shared/ui/Stack';
import cls from './ProfileCard.module.scss';

export enum ProfileCardTheme {
    loading = 'loading',
    error = 'error',
    editing = 'editing'
}

interface ProfileCardProps {
    theme?: ProfileCardTheme;
    className?: string;
    readonly?: boolean;
    first?: string;
    lastname?: string;
    city?: string;
    age?: number;
    avatar?: string;
    currency?: Currency;
    country?: Country;
    onChangeFirst: (value: string) => void;
    onChangeLast: (value: string) => void;
    onChangeAge: (value: string) => void;
    onChangeCity: (value: string) => void;
    onChangeAvatar: (value: string) => void;
    onChangeCurrency: (value: Currency) => void;
    onChangeCountry: (value: Country) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        theme,
        className,
        readonly,
        first,
        lastname,
        age,
        city,
        currency,
        country,
        avatar,
        onChangeFirst,
        onChangeLast,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    const mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack max className={classNames(cls.ProfileCard, mods, [className, theme])}>
            {avatar && <Avatar url={avatar} alt="Аватар" className={cls.avatar} />}
            <Input
                placeholder={t('Ваше имя')}
                value={first}
                className={cls.field}
                readOnly={readonly}
                onChange={onChangeFirst}
                autoFocus
            />
            <Input
                placeholder={t('Ваша фамилия')}
                value={lastname}
                className={cls.field}
                readOnly={readonly}
                onChange={onChangeLast}
            />
            <Input
                placeholder={t('Ваш возраст')}
                value={age}
                className={cls.field}
                readOnly={readonly}
                onlyNumber
                onChange={onChangeAge}
            />
            <Input
                placeholder={t('Ваш город')}
                value={city}
                className={cls.field}
                readOnly={readonly}
                onChange={onChangeCity}
            />
            <SelectCurrency
                readOnly={readonly}
                value={currency}
                onChange={onChangeCurrency}
                className={cls.field}
            />
            <SelectCountry
                readOnly={readonly}
                value={country}
                onChange={onChangeCountry}
                className={cls.field}
            />
            <Input
                placeholder={t('Введите ссылку фотографии')}
                value={avatar}
                className={cls.field}
                readOnly={readonly}
                onChange={onChangeAvatar}
            />
        </VStack>
    );
});
