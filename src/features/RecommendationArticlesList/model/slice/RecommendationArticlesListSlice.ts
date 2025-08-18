import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    RecommendationArticlesListSchema,
} from '../types/recommendationArticlesListSchema';
import {
    fetchRecommendationArticleList,
} from '../services/FetchRecommendationArticlesList/FetchRecommendationArticleList';

const recommendationListAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

const initialState: RecommendationArticlesListSchema = {
    isLoading: false,
    error: undefined,
    entities: {},
    ids: [],
};

export const recommendationArticleList = recommendationListAdapter.getSelectors<StateSchema>(
    (state) => state.recommendationArticlesList || recommendationListAdapter.getInitialState(),
);

export const recommendationArticlesListSlice = createSlice({
    name: 'RecommendationArticlesList',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendationArticleList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchRecommendationArticleList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                recommendationListAdapter.setAll(state, action.payload);
            })
            .addCase(fetchRecommendationArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: recommendationArticlesListActions } = recommendationArticlesListSlice;
export const { reducer: recommendationArticlesListReducer } = recommendationArticlesListSlice;
