import { StateSchema } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleNextPage } from '../FetchArticleNextPage/FetchArticleNextPage';
import { articleInfinityListAction } from '../../slice/ArticleInfinityListSlice';
import { fetchArticleList } from '../FetchArticleList/FetchArticleList';
import clearAllMocks = jest.clearAllMocks;

jest.mock('../FetchArticleList/FetchArticleList');

describe('FetchArticleNextPage.test', () => {
    afterEach(() => {
        clearAllMocks();
    });
    test('fetch data success', async () => {
        const state: DeepPartial<StateSchema> = {
            articleInfinityList: {
                isLoading: false,
                limit: 9,
                hasMore: true,
                page: 1,
            },
        };
        const classThunk = new TestAsyncThunk(fetchArticleNextPage, state);
        const result = await classThunk.callActionCreator();
        expect(classThunk.dispatch).toHaveBeenCalledTimes(4);
        expect(classThunk.dispatch).toHaveBeenCalledWith(articleInfinityListAction.setPage(2));
        expect(fetchArticleList).toHaveBeenCalledWith({});
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
    test('fetch data with loading', async () => {
        const state: DeepPartial<StateSchema> = {
            articleInfinityList: {
                isLoading: true,
                limit: 9,
                hasMore: true,
                page: 1,
            },
        };
        const classThunk = new TestAsyncThunk(fetchArticleNextPage, state);
        const result = await classThunk.callActionCreator();
        expect(classThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(classThunk.dispatch).not.toHaveBeenCalledWith(articleInfinityListAction.setPage(2));
        expect(fetchArticleList).not.toHaveBeenCalledWith({});
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
    test('start with not has more', async () => {
        const state: DeepPartial<StateSchema> = {
            articleInfinityList: {
                isLoading: false,
                limit: 9,
                hasMore: false,
                page: 1,
            },
        };
        const classThunk = new TestAsyncThunk(fetchArticleNextPage, state);
        await classThunk.callActionCreator();
        expect(classThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
    test('start with loading', async () => {
        const state: DeepPartial<StateSchema> = {
            articleInfinityList: {
                limit: 9,
                hasMore: true,
                page: 1,
            },
        };
        const classThunk = new TestAsyncThunk(fetchArticleNextPage, state);
        await classThunk.callActionCreator();
        expect(classThunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticleList).toHaveBeenCalled();
    });
});
