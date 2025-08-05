import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'features/ArticleList/model/types/articleView';
import {
    getArticleListLoading, getArticleListLoadingNextPage,
    getArticleView, getHasMore,
    getPageLimit, getPageNumber,
} from '../selectors/articleListSelector';

describe('articleListSelector.test', () => {
    test('test getArticleListLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleList: {
                isLoading: true,
            },
        };
        expect(getArticleListLoading(state as StateSchema)).toBe(true);
    });
    test('test getArticleListLoading with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListLoading(state as StateSchema)).toBe(undefined);
    });
    test('test getArticleListLoadingNextPage', () => {
        const state: DeepPartial<StateSchema> = {
            articleList: {
                isLoadingNextPage: true,
            },
        };
        expect(getArticleListLoadingNextPage(state as StateSchema)).toBe(true);
    });
    test('test getArticleListLoadingNextPage with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleListLoadingNextPage(state as StateSchema)).toBe(undefined);
    });

    test('getArticleView', () => {
        const state: DeepPartial<StateSchema> = {
            articleList: {
                articleView: ArticleView.BIG,
            },
        };
        expect(getArticleView(state as StateSchema)).toBe(ArticleView.BIG);
    });
    test('getArticleView with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleView(state as StateSchema)).toBe(ArticleView.SMALL);
    });
    test('getPageLimit', () => {
        const state: DeepPartial<StateSchema> = {
            articleList: {
                limit: 9,
            },
        };
        expect(getPageLimit(state as StateSchema)).toBe(9);
    });
    test('getPageLimit with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getPageLimit(state as StateSchema)).toBe(undefined);
    });
    test('getPageNumber', () => {
        const state: DeepPartial<StateSchema> = {
            articleList: {
                page: 1,
            },
        };
        expect(getPageNumber(state as StateSchema)).toBe(1);
    });
    test('getPageNumber with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getPageNumber(state as StateSchema)).toBe(1);
    });
    test('getHasMore', () => {
        const state: DeepPartial<StateSchema> = {
            articleList: {
                hasMore: true,
            },
        };
        expect(getHasMore(state as StateSchema)).toBe(true);
    });
    test('getHasMore with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getHasMore(state as StateSchema)).toBe(undefined);
    });
});
