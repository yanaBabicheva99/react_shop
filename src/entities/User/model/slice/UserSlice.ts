import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { User, UserSchema } from '../types/User';

const initialState: UserSchema = {
    inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initAuthData: (state) => {
            const localStorageAuthData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (localStorageAuthData) {
                state.authData = JSON.parse(localStorageAuthData);
            }
            state.inited = true;
        },
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
