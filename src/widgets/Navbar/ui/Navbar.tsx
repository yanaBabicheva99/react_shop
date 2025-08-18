import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Portal } from 'shared/ui/Portal/Portal';
import { loginActions, LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { routesPath } from 'shared/config/routerConfig/routerConfig';
import { NavLink } from 'shared/ui/NavLink/NavLink';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './Navbar.module.scss';

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

    const handleClickLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (isAuth) {
        return (
            <header className={classNames(cls.Navbar, {})}>
                <Text theme={TextTheme.INVERTED} title={t('Реакт приложение')} className={cls.appName} />
                <NavLink to={routesPath.article_create}>{t('Создать статью')}</NavLink>
                <Button onClick={handleClickLogout} className={cls.authBtn}>{t('Выйти')}</Button>
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
