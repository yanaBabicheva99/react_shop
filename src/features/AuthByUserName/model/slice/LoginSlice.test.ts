import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './LoginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('LoginSlice.test', () => {
    test('test username reducer', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('user123'))).toEqual({ username: 'user123' });
    });
    test('test password reducer', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '12345',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345'))).toEqual({ password: '12345' });
    });
    test('test reset data', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'user',
            password: '123',
            isLoading: true,
        };
        expect(loginReducer(state as LoginSchema, loginActions.resetLoginData))
            .toEqual({
                username: '',
                password: '',
                isLoading: false,
            });
    });
});
