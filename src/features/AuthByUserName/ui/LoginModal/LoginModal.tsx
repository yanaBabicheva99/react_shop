import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';

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

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [className])}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
