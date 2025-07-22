import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { profileActions } from '../../model/slice/profileSlice';
import cls from './ProfilePageHeader.module.scss';
import {
    updateProfileCardInfo,
} from '../../model/services/UpdateProfileCardInfo/UpdateProfileCardInfo';

interface ProfilePageHeaderProps {
    className?: string;
    readOnly?: boolean;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
        readOnly,
    } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handleChangeReadOnly = useCallback(() => {
        dispatch(profileActions.changeReadOnly(false));
    }, [dispatch]);

    const handleCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const handleSave = useCallback(() => {
        dispatch(updateProfileCardInfo());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readOnly
                ? (
                    <Button
                        theme={ThemeButton.OUTLINE}
                        onClick={handleChangeReadOnly}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <div className={cls.actionBtn}>
                        <Button
                            theme={ThemeButton.OUTLINE_RED}
                            onClick={handleCancel}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            theme={ThemeButton.OUTLINE_INVERTED}
                            onClick={handleSave}
                            className={cls.saveBtn}
                        >
                            {t('Сохранить')}
                        </Button>
                    </div>
                )}
        </div>
    );
};
