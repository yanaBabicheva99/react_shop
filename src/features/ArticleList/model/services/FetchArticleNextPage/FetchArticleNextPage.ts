import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articleListAction } from '../../slice/ArticleListSlice';
import { fetchArticleList } from '../../services/FetchArticleList/FetchArticleList';
import {
    getArticleListLoadingNextPage, getHasMore, getPageNumber,
} from '../../selectors/articleListSelector';

export const fetchArticleNextPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchArticleNextPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const isLoading = getArticleListLoadingNextPage(getState());
        const hasMore = getHasMore(getState());
        const page = getPageNumber(getState());

        if (hasMore && !isLoading) {
            dispatch(articleListAction.setLoadingNextPage());
            dispatch(articleListAction.setPage(page + 1));
            await dispatch(fetchArticleList({
                page: page + 1,
            }));
        }
    },
);
