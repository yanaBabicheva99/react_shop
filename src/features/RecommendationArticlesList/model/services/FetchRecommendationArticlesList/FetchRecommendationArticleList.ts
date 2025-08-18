import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchRecommendationArticleList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesList/fetchRecommendationArticleList',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get('/articles', {
                params: { _expand: 'user', _limit: 4 },
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
