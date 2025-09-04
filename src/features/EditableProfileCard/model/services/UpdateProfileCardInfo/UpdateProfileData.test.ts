import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileCardInfo } from './UpdateProfileCardInfo';
import { Profile } from '../../types/profileSchema';
import clearAllMocks = jest.clearAllMocks;
import { ValidateProfileError } from '../../consts/editableProfileConsts';

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

    test('validation', async () => {
        const classThunk = new TestAsyncThunk(updateProfileCardInfo, {
            profile: {
                form: { ...data, lastname: '', first: '' },
            },
        });
        const result = await classThunk.callActionCreator();
        expect(classThunk.api.put).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('fetch data success', async () => {
        const classThunk = new TestAsyncThunk(updateProfileCardInfo, {
            profile: {
                form: data,
                data: { ...data, id: '1' },
            },
        });
        classThunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await classThunk.callActionCreator();
        expect(classThunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('return error', async () => {
        const classThunk = new TestAsyncThunk(updateProfileCardInfo, {
            profile: {
                form: data,
                data: { ...data, id: '1' },
            },
        });
        classThunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await classThunk.callActionCreator();
        expect(classThunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
});
