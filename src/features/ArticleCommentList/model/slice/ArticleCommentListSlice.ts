import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    fetchCommentsByArticleId,
} from '../servicices/FetchCommentsByArticleId/FetchCommentsByArticleId';
import { ArticleCommentListSchema } from '../types/articleCommentListSchema';
import {
    addNewCommentArticle,
} from '../servicices/AddNewCommentArticle/AddNewCommentArticle';

const articleCommentListAdapter = createEntityAdapter({
    selectId: (comment: Comment) => comment.id,
});

export const articleCommentList = articleCommentListAdapter.getSelectors<StateSchema>(
    (state) => state.articleCommentList || articleCommentListAdapter.getInitialState(),
);

const articleCommentListSlice = createSlice({
    name: 'articleCommentList',
    initialState: articleCommentListAdapter.getInitialState<ArticleCommentListSchema>({
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
                state.isLoading = false;
                articleCommentListAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addNewCommentArticle.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(addNewCommentArticle.fulfilled, (state) => {
                state.isLoading = false;
                // articleCommentListAdapter.setOne(state, action.payload);
            })
            .addCase(addNewCommentArticle.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleCommentListAction } = articleCommentListSlice;
export const { reducer: articleCommentListReducer } = articleCommentListSlice;
