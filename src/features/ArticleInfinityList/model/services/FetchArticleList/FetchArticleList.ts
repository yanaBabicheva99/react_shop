import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import {
    getSearchType, getSortField, getSortOrder, getSortSearch,
} from '@/features/ArticlesSort';
import { getPageLimit, getPageNumber } from '../../selectors/articleListSelector';

interface FetchArticleListProps {
    replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
    'articles/fetchArticleList',
    async (props, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const _limit = getPageLimit(getState());
        const page = getPageNumber(getState());
        const sort = getSortField(getState());
        const order = getSortOrder(getState());
        const search = getSortSearch(getState());
        const type = getSearchType(getState());

        try {
            const response = await extra.api.get('/articles', {
                params: {
                    _expand: 'user',
                    _limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    type: type === ArticleType.ALL ? undefined : type,
                    q: search,
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
