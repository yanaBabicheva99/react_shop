import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getPageLimit } from '../../selectors/articleListSelector';

interface FetchArticleListProps {
    page: number;
}

export const fetchArticleList = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
    'articles/fetchArticleList',
    async (props, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const _limit = getPageLimit(getState());
        const { page = 1 } = props;
        try {
            const response = await extra.api.get('/articles', {
                params: {
                    _expand: 'user',
                    _limit,
                    _page: page,
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
