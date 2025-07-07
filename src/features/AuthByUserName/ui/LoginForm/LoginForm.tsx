import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/service/LoginByUsername/LoginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginActions } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    onCloseModal: () => void;
}

export const LoginForm = (props: LoginFormProps) => {
    const {
        className,
        onCloseModal,
    } = props;

    const dispatch = useDispatch<AppDispatch>();
    const authData = useSelector(getLoginState);

    const { t } = useTranslation();

    const handleChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const handleChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const handleClickLogin = () => {
        dispatch(loginByUsername(authData)).unwrap().then(() => {
            onCloseModal();
        });
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            {authData.error && (
                <Text text={t('Некорректные данные авторизации')} theme={TextTheme.ERROR} className={cls.error} />
            )}
            <Input
                placeholder={t('Имя пользователя')}
                value={authData?.username}
                onChange={handleChangeUsername}
                className={cls.input}
                autoFocus
            />
            <Input
                placeholder={t('Пароль')}
                value={authData?.password}
                className={cls.input}
                onChange={handleChangePassword}
            />
            <Button
                className={cls.loginBtn}
                theme={ThemeButton.OUTLINE}
                onClick={handleClickLogin}
                disabled={authData?.isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
