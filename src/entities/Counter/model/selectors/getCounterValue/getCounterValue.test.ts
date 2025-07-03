import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';

describe('getCounterValue.test', () => {
    test('', () => {
        const initialState: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(initialState as StateSchema)).toBe(10);
    });
});
