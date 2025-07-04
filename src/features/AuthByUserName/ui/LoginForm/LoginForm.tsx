import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                placeholder={t('Имя пользователя')}
                value=""
                className={cls.input}
                autoFocus
            />
            <Input
                placeholder={t('Пароль')}
                value=""
                className={cls.input}
            />
            <Button
                className={cls.loginBtn}
                theme={ThemeButton.OUTLINE}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
