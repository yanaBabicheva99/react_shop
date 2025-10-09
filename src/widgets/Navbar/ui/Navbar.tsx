import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Portal } from '@/shared/ui/Portal/Portal';
import { loginActions, LoginModal } from '@/features/AuthByUserName';
import { getUserAuthData } from '@/entities/User';
import { NavLink } from '@/shared/ui/NavLink/NavLink';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarButton } from '@/features/AvatarButton';
import cls from './Navbar.module.scss';
import { routesPath } from '@/shared/const/router';

export const NavBar = memo(() => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const isAuth = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const handleOpenModal = useCallback(() => {
        setIsOpenModal(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsOpenModal(false);
        dispatch(loginActions.resetLoginData());
    }, [dispatch]);

    if (isAuth) {
        return (
            <header className={classNames(cls.Navbar, {})}>
                <Text theme={TextTheme.INVERTED} title={t('Реакт приложение')} className={cls.appName} />
                <NavLink to={routesPath.article_create}>{t('Создать статью')}</NavLink>
                <HStack gap="16" className={cls.authBtn}>
                    <NotificationButton />
                    <AvatarButton />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {})}>
            <Button onClick={handleOpenModal} className={cls.authBtn}>{t('Войти')}</Button>
            <Portal>
                <LoginModal isOpen={isOpenModal} onClose={handleCloseModal} />
            </Portal>
        </header>
    );
});
