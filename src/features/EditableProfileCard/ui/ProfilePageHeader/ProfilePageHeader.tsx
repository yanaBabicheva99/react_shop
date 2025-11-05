import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { getVisibleEdit } from '../../model/selectors/getVisibleEdit/getVisibleEdit';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileCardInfo } from '../../model/services/UpdateProfileCardInfo/UpdateProfileCardInfo';

interface ProfilePageHeaderProps {
    className?: string;
    readOnly?: boolean;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className, readOnly } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const isEdit = useSelector(getVisibleEdit);

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
        <HStack justify="between" max className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {isEdit && (
                <div>
                    {readOnly ? (
                        <Button theme={ThemeButton.OUTLINE} onClick={handleChangeReadOnly} data-testid="Edit">
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <HStack gap="16">
                            <Button theme={ThemeButton.OUTLINE_RED} onClick={handleCancel} data-testid="Cancel">
                                {t('Отменить')}
                            </Button>
                            <Button theme={ThemeButton.OUTLINE_INVERTED} onClick={handleSave} data-testid="Save">
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    );
};
