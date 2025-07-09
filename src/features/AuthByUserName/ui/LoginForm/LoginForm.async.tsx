import { FC, lazy } from 'react';
import { LoginFormProps } from 'features/AuthByUserName/ui/LoginForm/LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((res) => setTimeout(() => {
    // @ts-ignore
    res(import('./LoginForm'));
}, 1000)));
