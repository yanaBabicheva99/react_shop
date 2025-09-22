import { StateSchema } from '@/app/providers/StoreProvider';
import { getUsername } from './getUsername';

describe('getUsername.test', () => {
    test('with value', () => {
        const state: DeepPartial<StateSchema> = {
            login: { username: 'User' },
        };
        expect(getUsername(state as StateSchema)).toBe('User');
    });

    test('with empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getUsername(state as StateSchema)).toBe('');
    });
});
