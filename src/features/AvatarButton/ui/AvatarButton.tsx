import { useTranslation } from 'react-i18next';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import { getUserAuthData, isAdmin, isManager, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';

interface AvatarButtonProps {
    className?: string;
}

export const AvatarButton = (props: AvatarButtonProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const isAuth = useSelector(getUserAuthData);
    const isAdminRole = useSelector(isAdmin);
    const isManagerRole = useSelector(isManager);
    const isVisibleAdminPanel = isAdminRole || isManagerRole;

    const { t } = useTranslation();

    const handleClickLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!isAuth) return null;

    return (
        <Dropdown
            direction="bottom left"
            trigger={<Avatar url={isAuth.avatar!} size={30} alt="avatar" fallbackInverted />}
            options={[
                ...(isVisibleAdminPanel
                    ? [
                          {
                              content: t('Админка'),
                              href: getRouteAdmin(),
                          },
                      ]
                    : []),
                { content: t('Профиль'), href: getRouteProfile(isAuth.id) },
                { content: t('Выйти'), onClick: handleClickLogout },
            ]}
            className={className}
        />
    );
};
