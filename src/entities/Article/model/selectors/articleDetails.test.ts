import { StateSchema } from 'app/providers/StoreProvider';
import { getArticle, getArticleError, getArticleIsLoading } from './articleDetails';
import { ArticleType } from '../types/article';

const data = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
};

describe('articleDetails.test', () => {
    test('getArticle with value', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticle(state as StateSchema)).toEqual(data);
    });
    test('with empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticle(state as StateSchema)).toBe(undefined);
    });

    test('getArticleIsLoading with value', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleIsLoading(state as StateSchema)).toBe(true);
    });
    test('getArticleIsLoading with empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleIsLoading(state as StateSchema)).toBe(undefined);
    });

    test('getArticleError with value', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleError(state as StateSchema)).toBe('error');
    });
    test('getArticleError with empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleError(state as StateSchema)).toBe(undefined);
    });
});
