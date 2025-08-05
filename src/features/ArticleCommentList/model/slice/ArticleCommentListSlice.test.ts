import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from '../servicices/FetchCommentsByArticleId/FetchCommentsByArticleId';
import { articleCommentListReducer } from './ArticleCommentListSlice';
import { ArticleCommentListSchema } from '../types/articleCommentListSchema';
import {
    addNewCommentArticle,
} from '../servicices/AddNewCommentArticle/AddNewCommentArticle';

const comments: Comment[] = [{
    id: '1',
    text: 'Some text',
    user: {
        id: '1',
        username: 'user',
    },
}];

describe('ArticleCommentListSlice.test', () => {
    test('test pending fetchCommentsByArticleId', () => {
        const state: DeepPartial<ArticleCommentListSchema> = {
            error: 'Error',
            isLoading: false,
        };
        expect(articleCommentListReducer(state as ArticleCommentListSchema, fetchCommentsByArticleId.pending)).toEqual({
            error: undefined,
            isLoading: true,
        });
    });
    test('test fulfilled fetchCommentsByArticleId', () => {
        const state: DeepPartial<ArticleCommentListSchema> = {
            isLoading: true,
            ids: [],
            entities: {},
        };
        expect(articleCommentListReducer(state as ArticleCommentListSchema, fetchCommentsByArticleId.fulfilled(comments, '', ''))).toEqual({
            isLoading: false,
            ids: ['1'],
            entities: { 1: comments[0] },
        });
    });

    test('test reject fetchCommentsByArticleId', () => {
        const state: DeepPartial<ArticleCommentListSchema> = {
            isLoading: true,
        };

        const rejectAction = {
            type: fetchCommentsByArticleId.rejected.type,
            payload: 'Some Error',
        };

        expect(articleCommentListReducer(state as ArticleCommentListSchema, rejectAction)).toEqual({
            isLoading: false,
            error: 'Some Error',
        });
    });

    test('test pending', () => {
        const state: DeepPartial<ArticleCommentListSchema> = {
            isLoading: false,
            error: 'error',
        };
        expect(articleCommentListReducer(state as ArticleCommentListSchema, addNewCommentArticle.pending)).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test fulfilled', () => {
        const state: DeepPartial<ArticleCommentListSchema> = {
            isLoading: true,
        };
        expect(articleCommentListReducer(state as ArticleCommentListSchema, addNewCommentArticle.fulfilled)).toEqual({
            isLoading: false,
        });
    });

    test('test reject', () => {
        const state: DeepPartial<ArticleCommentListSchema> = {
            isLoading: true,
            error: undefined,
        };

        const rejectAction = {
            type: addNewCommentArticle.rejected.type,
            payload: 'Error',
        };
        expect(articleCommentListReducer(state as ArticleCommentListSchema, rejectAction)).toEqual({
            isLoading: false,
            error: 'Error',
        });
    });
});
