import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Portal } from 'shared/ui/Portal/Portal';
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
                <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
                    {t('Текст модального окна')}
                </Modal>
            </Portal>
        </div>
    );
};
