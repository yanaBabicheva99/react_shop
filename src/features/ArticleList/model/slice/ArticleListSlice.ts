import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { fetchArticleNextPage } from 'features/ArticleList/model/services/FetchArticleNextPage/FetchArticleNextPage';
import { fetchArticleList } from '../services/FetchArticleList/FetchArticleList';
import { ArticleListSchema } from '../types/articleListSchema';
import { ArticleView } from '../types/articleView';

const articleListAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

export const articleList = articleListAdapter.getSelectors<StateSchema>(
    (state) => state.articleList || articleListAdapter.getInitialState(),
);

const articleListSlice = createSlice({
    name: 'articleListSlice',
    initialState: articleListAdapter.getInitialState<ArticleListSchema>({
        isLoading: false,
        isLoadingNextPage: false,
        ids: [],
        entities: {},
        hasMore: true,
        page: 1,
        _inited: false,
    }),
    reducers: {
        initState: (state) => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView || ArticleView.SMALL;
            state.articleView = view;
            state.limit = view === ArticleView.SMALL ? 9 : 4;
            state._inited = true;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setArticleView: (state, action: PayloadAction<ArticleView>) => {
            state.articleView = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
            // state.limit = action.payload === ArticleView.SMALL ? 9 : 4;
        },
        setLoadingNextPage: (state) => {
            state.isLoadingNextPage = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false;
                articleListAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchArticleNextPage.fulfilled, (state) => {
                state.isLoadingNextPage = false;
            })
            .addCase(fetchArticleNextPage.rejected, (state) => {
                state.isLoadingNextPage = false;
            });
    },
});

export const { actions: articleListAction } = articleListSlice;
export const { reducer: articleListReducer } = articleListSlice;
