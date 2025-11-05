import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { articleInfinityListAction } from '../../slice/ArticleInfinityListSlice';
import { fetchArticleList } from '../../services/FetchArticleList/FetchArticleList';
import { getArticleInfinityListLoading, getHasMore, getPageNumber } from '../../selectors/articleListSelector';

export const fetchArticleNextPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchArticleNextPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const hasMore = getHasMore(getState());
        const page = getPageNumber(getState());
        const loading = getArticleInfinityListLoading(getState());

        if (hasMore && !loading) {
            dispatch(articleInfinityListAction.setPage(page + 1));
            await dispatch(fetchArticleList({}));
        }
    },
);
