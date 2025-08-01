import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateProfileCardInfo } from '../services/UpdateProfileCardInfo/UpdateProfileCardInfo';
import { Profile, ProfileSchema } from '../types/profileSchema';
import { fetchProfileData } from '../services/FetchProfileData/FetchProfileData';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setFormData: (state, action: PayloadAction<Omit<Profile, 'id'>>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        changeReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },

        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileCardInfo.pending, (state) => {
                state.isLoading = true;
                state.validateProfileError = undefined;
            })
            .addCase(updateProfileCardInfo.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
            })
            .addCase(updateProfileCardInfo.rejected, (state, action) => {
                state.isLoading = false;
                state.validateProfileError = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
