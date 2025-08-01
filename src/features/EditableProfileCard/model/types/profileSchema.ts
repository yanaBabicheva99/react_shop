import { Currency } from 'entities/Currency/model/types/Currency';
import { Country } from 'entities/Country';

export enum ValidateProfileError {
    NO_DATA = 'NO_DATA',
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_USER_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
    id: string;
    first?: string;
    lastname?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Omit<Profile, 'id'>;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateProfileError?: ValidateProfileError[];
}
