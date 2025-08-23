import { ValidateProfileError, Profile } from '../../types/profileSchema';

export const validateProfileData = (profile?: Omit<Profile, 'id'>) => {
    const validateErrors: ValidateProfileError[] = [];

    if (!profile) {
        validateErrors.push(ValidateProfileError.NO_DATA);
        return validateErrors;
    }

    const {
        first, lastname, age, country,
    } = profile;

    if (!first || !lastname) {
        validateErrors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age) {
        validateErrors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        validateErrors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return validateErrors;
};
