import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import {
    getArticleInfinityListLoading,
    getArticleView, getHasMore,
    getPageLimit, getPageNumber,
} from '../selectors/articleListSelector';

describe('articleListSelector.test', () => {
    test('test getArticleListLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleInfinityList: {
                isLoading: true,
            },
        };
        expect(getArticleInfinityListLoading(state as StateSchema)).toBe(true);
    });
    test('test getArticleListLoading with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleInfinityListLoading(state as StateSchema)).toBe(undefined);
    });

    test('getArticleView', () => {
        const state: DeepPartial<StateSchema> = {
            articleInfinityList: {
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
            articleInfinityList: {
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
            articleInfinityList: {
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
            articleInfinityList: {
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
