import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profileSchema';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get(`/profile/${profileId}`);
            if (!response.data) {
                throw new Error('error');
            }
            return response.data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
