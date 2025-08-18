import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleDetails = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetails/fetchArticleDetails',
    async (id, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get(`/articles/${id}`, {
                params: {
                    _expand: 'user',
                },
            });
            if (!response.data) {
                throw new Error('error');
            }
            return response.data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
