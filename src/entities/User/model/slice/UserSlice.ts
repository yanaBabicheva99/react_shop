import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { User, UserSchema } from '../types/User';
import { setFeatureFlags } from '@/shared/lib/features';

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
                const json = JSON.parse(localStorageAuthData) as User;
                state.authData = json;
                if (json.features) {
                    setFeatureFlags(json.features);
                }
            }
            state.inited = true;
        },
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            if (action.payload.features) {
                setFeatureFlags(action.payload.features);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
