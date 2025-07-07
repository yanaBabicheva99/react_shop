import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import { useTranslation } from 'react-i18next';

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
            <LoginForm onCloseModal={onClose} />
        </Modal>
    );
};
