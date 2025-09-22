import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoading } from './getLoading';

describe('getLoading.test', () => {
    test('test is Loading', () => {
        const state: DeepPartial<StateSchema> = {
            login: { isLoading: true },
        };
        expect(getLoading(state as StateSchema)).toBe(true);
    });

    test('with empty isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoading(state as StateSchema)).toBe(false);
    });
});
