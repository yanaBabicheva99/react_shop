import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getUsername } from 'features/AuthByUserName/model/selectors/getUsername/getUsername';
import { getPassword } from 'features/AuthByUserName/model/selectors/getPassword/getPassword';
import { getError } from 'features/AuthByUserName/model/selectors/getError/getError';
import { getLoading } from 'features/AuthByUserName/model/selectors/getLoading/getLoading';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUsername } from '../../model/service/LoginByUsername/LoginByUsername';
import { loginActions, loginReducer } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onCloseModal: () => void;
}

const reducersList: ReducersList = {
    login: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
        onCloseModal,
    } = props;

    const dispatch = useDispatch<AppDispatch>();
    const username = useSelector(getUsername);
    const password = useSelector(getPassword);
    const error = useSelector(getError);
    const isLoading = useSelector(getLoading);

    const { t } = useTranslation();

    const handleChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const handleChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const handleClickLogin = () => {
        dispatch(loginByUsername({ username, password })).unwrap().then(() => {
            onCloseModal();
        });
    };

    return (
        <DynamicModuleLoader reducers={reducersList}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                {error && (
                    <Text text={t('Некорректные данные авторизации')} theme={TextTheme.ERROR} className={cls.error} />
                )}
                <Input
                    placeholder={t('Имя пользователя')}
                    value={username || ''}
                    onChange={handleChangeUsername}
                    className={cls.input}
                    autoFocus
                />
                <Input
                    placeholder={t('Пароль')}
                    value={password || ''}
                    className={cls.input}
                    onChange={handleChangePassword}
                />
                <Button
                    className={cls.loginBtn}
                    theme={ThemeButton.OUTLINE}
                    onClick={handleClickLogin}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
