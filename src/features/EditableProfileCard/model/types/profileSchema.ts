import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ValidateProfileError } from '../consts/editableProfileConsts';

export interface Profile {
    id: string;
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
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
