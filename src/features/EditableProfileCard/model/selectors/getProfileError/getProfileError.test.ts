import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'Some error',
            },
        };
        expect(getProfileError(state as StateSchema)).toBe('Some error');
    });
});
