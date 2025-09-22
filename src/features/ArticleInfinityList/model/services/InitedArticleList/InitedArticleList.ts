import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { articlesSortAction } from '@/features/ArticlesSort';
import { articleInfinityListAction } from '../../slice/ArticleInfinityListSlice';
import { fetchArticleList } from '../FetchArticleList/FetchArticleList';
import { articleInfiniteListInited } from '../../selectors/articleListSelector';

interface InitedArticleListProps {
    searchParams: URLSearchParams;
}

export const initedArticleList = createAsyncThunk<void, InitedArticleListProps, ThunkConfig<string>>(
    'articleList/initedArticleList',
    async ({ searchParams }, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const _inited = articleInfiniteListInited(getState());
        if (!_inited) {
            searchParams.forEach((key) => {
                const value = searchParams.get(key);
                if (value) {
                    dispatch(articlesSortAction.initSortParams({ key, value }));
                }
            });
            dispatch(articleInfinityListAction.initState());
            dispatch(fetchArticleList({}));
        }
    },
);
