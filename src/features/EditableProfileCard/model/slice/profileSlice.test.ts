import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ValidateProfileError } from '../consts/editableProfileConsts';
import { updateProfileCardInfo } from '../services/UpdateProfileCardInfo/UpdateProfileCardInfo';
import { fetchProfileData } from '../services/FetchProfileData/FetchProfileData';
import { Profile, ProfileSchema } from '../types/profileSchema';
import { profileActions, profileReducer } from './profileSlice';

const data: Profile = {
    id: '1',
    first: 'Маша',
    lastname: 'Наша',
    age: 6,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Краснодар',
};

describe('profileSlice.test', () => {
    test('test change form', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {},
        };
        expect(profileReducer(state as ProfileSchema, profileActions.setFormData(data))).toEqual({
            form: data,
        });
    });
    test('test change readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: true,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.changeReadOnly(false))).toEqual({
            readonly: false,
        });
    });

    test('test reset form', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: undefined,
            readonly: false,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            data,
            form: data,
            readonly: true,
        });
    });

    test('test pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
        };
        expect(profileReducer(state as ProfileSchema, fetchProfileData.pending)).toEqual({
            isLoading: true,
        });
    });

    test('test fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(state as ProfileSchema, fetchProfileData.fulfilled(data, '', ''))).toEqual({
            isLoading: false,
            data,
            form: data,
        });
    });

    test('test reject', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        const rejectedAction = {
            type: fetchProfileData.rejected.type,
            payload: 'Error', // This can be an error object or a string
            error: {
                message: 'Something went wrong', // This is typically what you'd find in the error property
            },
        };
        expect(profileReducer(state as ProfileSchema, rejectedAction)).toEqual({
            error: 'Error',
            isLoading: false,
        });
    });

    test('test pending updateProfileData', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateProfileError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileCardInfo.pending)).toEqual({
            isLoading: true,
            validateProfileError: undefined,
        });
    });

    test('test fulfilled updateProfileData', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            data,
            form: data,
            readonly: false,
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileCardInfo.fulfilled({ ...data, username: 'Яна' }, '')),
        ).toEqual({
            isLoading: false,
            data: { ...data, username: 'Яна' },
            form: { ...data, username: 'Яна' },
            readonly: true,
        });
    });

    test('test reject updateProfileData', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        const rejectedAction = {
            type: updateProfileCardInfo.rejected.type,
            payload: 'Error', // This can be an error object or a string
            error: {
                message: 'Something went wrong', // This is typically what you'd find in the error property
            },
        };
        expect(profileReducer(state as ProfileSchema, rejectedAction)).toEqual({
            validateProfileError: 'Error',
            isLoading: false,
        });
    });
});
