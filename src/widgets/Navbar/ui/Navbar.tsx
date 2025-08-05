import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Portal } from 'shared/ui/Portal/Portal';
import { loginActions, LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
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
