import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getVisibleEdit = createSelector(
    [
        (state: StateSchema) => state.user.authData,
        (state: StateSchema) => state.profile?.data,
    ],
    (authData, profileData) => authData?.id === profileData?.id,
);
