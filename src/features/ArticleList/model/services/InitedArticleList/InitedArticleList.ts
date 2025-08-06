import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articleListAction } from '../../slice/ArticleListSlice';
import { fetchArticleList } from '../FetchArticleList/FetchArticleList';
import { articleListInited } from '../../selectors/articleListSelector';

export const initedArticleList = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articleList/initedArticleList',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const _inited = articleListInited(getState());
        if (!_inited) {
            dispatch(articleListAction.initState());
            dispatch(fetchArticleList({ page: 1 }));
        }
    },
);
