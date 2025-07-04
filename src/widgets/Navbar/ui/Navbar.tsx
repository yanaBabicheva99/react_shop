import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Portal } from 'shared/ui/Portal/Portal';
import { LoginModal } from 'features/AuthByUserName';
import cls from './Navbar.module.scss';

export const NavBar = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const { t } = useTranslation();

    const handleOpenModal = useCallback(() => {
        setIsOpenModal(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsOpenModal(false);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {})}>
            <Button onClick={handleOpenModal} className={cls.authBtn}>{t('Войти')}</Button>
            <Portal>
                <LoginModal isOpen={isOpenModal} onClose={handleCloseModal} />
            </Portal>
        </div>
    );
};
