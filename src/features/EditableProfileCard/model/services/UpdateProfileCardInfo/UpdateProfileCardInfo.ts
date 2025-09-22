import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../consts/editableProfileConsts';
import { getProfileData } from '../../selectors/getProfileData/getProfileData';
import { validateProfileData } from '../../services/ValidateProfileData/ValidateProfileData';
import { Profile } from '../../types/profileSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileCardInfo = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'editableProfileCard/updateProfileCardInfo',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        try {
            const formData = getProfileForm(getState());
            const profileData = getProfileData(getState());
            const validateErrors = validateProfileData(formData);
            if (validateErrors.length || !profileData?.id) {
                return rejectWithValue(validateErrors);
            }
            const response = await extra.api.put(`/profile/${profileData.id}`, formData);
            if (!response.data) {
                throw new Error('error');
            }
            return response.data;
        } catch (err) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
