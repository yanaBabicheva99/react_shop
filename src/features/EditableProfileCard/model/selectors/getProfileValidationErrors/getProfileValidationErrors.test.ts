import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../consts/editableProfileConsts';
import { getProfileValidationErrors } from './getProfileValidationErrors';

describe('getProfileValidationErrors', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateProfileError: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_USER_DATA,
                ],
            },
        };
        expect(getProfileValidationErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
