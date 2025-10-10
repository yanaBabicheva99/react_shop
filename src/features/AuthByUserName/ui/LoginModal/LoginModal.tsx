import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';
import { Loader } from '@/shared/ui/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        isOpen,
        onClose,
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <Modal
            title={t('Форма авторизации')}
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [className])}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onCloseModal={onClose} />
            </Suspense>
        </Modal>
    );
};
