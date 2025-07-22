import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadOnly(state as StateSchema)).toBe(true);
    });

    test('test empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadOnly(state as StateSchema)).toBe(undefined);
    });
});
