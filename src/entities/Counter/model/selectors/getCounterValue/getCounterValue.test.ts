import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from '../getCounterValue/getCounterValue';

describe('getCounterValue.test', () => {
    test('', () => {
        const initialState: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(initialState as StateSchema)).toBe(10);
    });
});
