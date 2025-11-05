import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleView } from '@/entities/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { fetchArticleList } from '../services/FetchArticleList/FetchArticleList';
import { ArticleInfinityListSchema } from '../types/articleListSchema';

const articleListAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

export const articleInfinityList = articleListAdapter.getSelectors<StateSchema>(
    (state) => state.articleInfinityList || articleListAdapter.getInitialState(),
);

const articleInfinityListSlice = createSlice({
    name: 'articleListSlice',
    initialState: articleListAdapter.getInitialState<ArticleInfinityListSchema>({
        isLoading: false,
        ids: [],
        limit: 9,
        entities: {},
        hasMore: true,
        page: 1,
        _inited: false,
    }),
    reducers: {
        initState: (state) => {
            const view = (localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView) || ArticleView.SMALL;
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.error = undefined;
                if (action.meta.arg.replace) {
                    articleListAdapter.removeAll(state);
                }
                state.isLoading = true;
            })
            .addCase(fetchArticleList.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.meta.arg.replace) {
                    articleListAdapter.setAll(state, action.payload);
                } else {
                    articleListAdapter.addMany(state, action.payload);
                }
                state.hasMore = action.payload.length === state.limit;
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleInfinityListAction } = articleInfinityListSlice;
export const { reducer: articleInfinityListReducer } = articleInfinityListSlice;
