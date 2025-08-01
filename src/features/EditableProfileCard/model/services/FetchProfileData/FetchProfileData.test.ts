import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './FetchProfileData';
import { Profile } from '../../types/profileSchema';
import clearAllMocks = jest.clearAllMocks;

const data: Profile = {
    id: '1',
    first: 'Маша',
    lastname: 'Наша',
    age: 6,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Краснодар',
};

describe('FetchProfileData.test', () => {
    afterEach(() => {
        clearAllMocks();
    });

    test('fetch data success', async () => {
        const classThunk = new TestAsyncThunk(fetchProfileData);
        classThunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await classThunk.callActionCreator('1');
        expect(classThunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('return error', async () => {
        const classThunk = new TestAsyncThunk(fetchProfileData);
        classThunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await classThunk.callActionCreator('1');
        expect(classThunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
