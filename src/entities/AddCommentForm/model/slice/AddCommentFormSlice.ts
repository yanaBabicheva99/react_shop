import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentFormSchema';

const initialState: AddCommentFormSchema = {
    error: undefined,
    text: '',
};

export const AddCommentFormSlice = createSlice({
    name: 'AddCommentForm',
    initialState,
    reducers: {
        setTextComment: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: addCommentFormActions } = AddCommentFormSlice;
export const { reducer: addCommentFormReducer } = AddCommentFormSlice;
