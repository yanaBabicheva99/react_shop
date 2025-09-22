import { TestAsyncThunk } from '@/shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { Article, ArticleType } from '@/entities/Article';
import { StateSchema } from '@/app/providers/StoreProvider';
import { fetchArticleList } from '../FetchArticleList/FetchArticleList';
import clearAllMocks = jest.clearAllMocks;

const data = [{
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    user: {
        username: 'user',
        avatar: '',
    },
}] as Article[];

describe('FetchArticleList.ts.test', () => {
    afterEach(() => {
        clearAllMocks();
    });
    test('fetch data success', async () => {
        const state: DeepPartial<StateSchema> = {
            articleInfinityList: {
                limit: 9,
                page: 1,
            },
        };
        const classThunk = new TestAsyncThunk(fetchArticleList, state);
        classThunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await classThunk.callActionCreator({});
        expect(classThunk.api.get).toHaveBeenCalled();
        expect(classThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('fetch data with empty result', async () => {
        const state: DeepPartial<StateSchema> = {
            articleInfinityList: {
                limit: 9,
                page: 1,
            },
        };
        const classThunk = new TestAsyncThunk(fetchArticleList, state);
        classThunk.api.get.mockReturnValue(Promise.resolve({ data: undefined }));
        const result = await classThunk.callActionCreator({});
        expect(classThunk.api.get).toHaveBeenCalled();
        expect(classThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
    test('fetch data with error', async () => {
        const state: DeepPartial<StateSchema> = {
            articleInfinityList: {
                limit: 9,
                page: 2,
            },
        };
        const classThunk = new TestAsyncThunk(fetchArticleList, state);
        classThunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await classThunk.callActionCreator({ });
        expect(classThunk.api.get).toHaveBeenCalled();
        expect(classThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
