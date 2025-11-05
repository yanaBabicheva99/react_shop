import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollTrackingSchema } from '../type/scrollTrackingSchema';

const initialState: ScrollTrackingSchema = {};

export const scrollTrackingSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
            state[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollTrackingActions } = scrollTrackingSlice;
export const { reducer: scrollTrackingReducer } = scrollTrackingSlice;
