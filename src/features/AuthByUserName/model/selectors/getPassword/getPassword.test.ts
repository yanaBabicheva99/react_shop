import { StateSchema } from '@/app/providers/StoreProvider';
import { getPassword } from './getPassword';

describe('getPassword.test', () => {
    test('with value', () => {
        const state: DeepPartial<StateSchema> = {
            login: { password: '123' },
        };
        expect(getPassword(state as StateSchema)).toBe('123');
    });
    test('with empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getPassword(state as StateSchema)).toBe('');
    });
});
