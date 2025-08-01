import { articleDetailsReducer } from '../slice/articleDetailsSlice';
import { ArticleType } from '../types/article';
import { fetchArticleDetails } from '../services/FetchArticleDetails/FetchArticleDetails';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const data = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'user',
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
};

describe('articleDetailsSlice.test', () => {
    test('test pending', () => {
        const state: ArticleDetailsSchema = {
            isLoading: false,
            error: 'Error',
        };
        expect(articleDetailsReducer(state, fetchArticleDetails.pending)).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('fulfilled', () => {
        const state: ArticleDetailsSchema = {
            isLoading: true,
        };
        expect(articleDetailsReducer(state, fetchArticleDetails.fulfilled(data, '', ''))).toEqual({
            isLoading: false,
            data,
        });
    });

    test('Error', () => {
        const state: ArticleDetailsSchema = {
            isLoading: true,
            error: undefined,
        };

        const rejectedAction = {
            type: fetchArticleDetails.rejected.type,
            payload: 'Error',
        };

        expect(articleDetailsReducer(state, rejectedAction)).toEqual({
            isLoading: false,
            error: 'Error',
        });
    });
});
