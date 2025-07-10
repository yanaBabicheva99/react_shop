import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getError } from './getError';

describe('getError.test', () => {
    test('test error text', () => {
        const state: DeepPartial<StateSchema> = {
            login: { error: 'Some Error' },
        };
        expect(getError(state as StateSchema)).toBe('Some Error');
    });

    test('with empty error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getError(state as StateSchema)).toBe(undefined);
    });
});
