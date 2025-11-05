import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ValidateProfileError } from '../../consts/editableProfileConsts';
import { Profile } from '../../types/profileSchema';
import { validateProfileData } from './ValidateProfileData';

const data: Profile = {
    id: '1',
    first: 'Маша',
    lastname: 'Наша',
    age: 6,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Краснодар',
};

describe('ValidateProfileData.test', () => {
    test('test valid form', () => {
        expect(validateProfileData(data)).toEqual([]);
    });

    test('test incorrect username and lastname', () => {
        expect(validateProfileData({ ...data, username: '', lastname: '' })).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('test incorrect age', () => {
        expect(validateProfileData({ ...data, age: undefined })).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('test incorrect country', () => {
        expect(validateProfileData({ ...data, country: undefined })).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('test multi incorrect form', () => {
        expect(
            validateProfileData({
                ...data,
                country: undefined,
                age: undefined,
                first: undefined,
            }),
        ).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
