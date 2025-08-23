import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileCard } from 'entities/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Currency } from 'entities/Currency/model/types/Currency';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Country } from 'entities/Country';
import { VStack } from 'shared/ui/Stack';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import cls from './EditableProfileCard.module.scss';
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import {
    getProfileValidationErrors,
} from '../../model/selectors/getProfileValidationErrors/getProfileValidationErrors';
import { ValidateProfileError } from '../../model/types/profileSchema';

interface EditableProfileCardProps {
    className?: string;
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');
    const dispatch = useDispatch();

    const validationErrorText = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
        [ValidateProfileError.NO_DATA]: t('Данные отсутствуют'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректные данные пользователя'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    };

    const profileForm = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readOnly = useSelector(getProfileReadOnly);
    const validationErrors = useSelector(getProfileValidationErrors);

    const handleChangeFirstname = useCallback((value: string) => {
        dispatch(profileActions.setFormData({ first: value }));
    }, [dispatch]);

    const handleChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.setFormData({ lastname: value }));
    }, [dispatch]);

    const handleChangeAge = useCallback((value: string) => {
        dispatch(profileActions.setFormData({ age: Number(value) || 0 }));
    }, [dispatch]);

    const handleChangeCity = useCallback((value: string) => {
        dispatch(profileActions.setFormData({ city: value }));
    }, [dispatch]);

    const handleChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.setFormData({ currency: value }));
    }, [dispatch]);

    const handleChangeCountry = useCallback((value: Country) => {
        dispatch(profileActions.setFormData({ country: value }));
    }, [dispatch]);

    const handleChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.setFormData({ avatar: value }));
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className={classNames(cls.EditableProfileCard, {}, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.EditableProfileCard, {}, [className])}>
                <Text
                    theme={TextTheme.ERROR}
                    textAlign={TextAlign.center}
                    title={t('Ошибка при загрузке страницы')}
                    text={t('Попробуйте обновить страницу')}
                />
            </div>
        );
    }

    return (
        <VStack gap="16" className={classNames('', {}, [className])}>
            <ProfilePageHeader readOnly={readOnly} />
            {validationErrors?.map((error) => (
                <Text key={error} theme={TextTheme.ERROR} text={validationErrorText[error]} />
            ))}
            <ProfileCard
                readonly={readOnly}
                first={profileForm?.first}
                lastname={profileForm?.lastname}
                city={profileForm?.city}
                age={profileForm?.age}
                currency={profileForm?.currency}
                country={profileForm?.country}
                avatar={profileForm?.avatar}
                onChangeFirst={handleChangeFirstname}
                onChangeLast={handleChangeLastname}
                onChangeAge={handleChangeAge}
                onChangeCity={handleChangeCity}
                onChangeAvatar={handleChangeAvatar}
                onChangeCurrency={handleChangeCurrency}
                onChangeCountry={handleChangeCountry}
            />
        </VStack>
    );
};
