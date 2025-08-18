import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleList } from '../FetchArticleList/FetchArticleList';
import { articleInfinityListAction } from '../../slice/ArticleInfinityListSlice';
import { initedArticleList } from './InitedArticleList';

jest.mock('../FetchArticleList/FetchArticleList');

describe('InitedArticleList.test', () => {
    test('test not inited', async () => {
        const classThunk = new TestAsyncThunk(initedArticleList, {
            articleInfinityList: {
                _inited: false,
            },
        });

        await classThunk.callActionCreator({ searchParams: new URLSearchParams() });
        expect(classThunk.dispatch).toHaveBeenCalledWith(articleInfinityListAction.initState());
        expect(fetchArticleList).toHaveBeenCalled();
        expect(classThunk.dispatch).toHaveBeenCalledTimes(4);
    });

    test('test inited', async () => {
        const classThunk = new TestAsyncThunk(initedArticleList, {
            articleInfinityList: {
                _inited: true,
            },
        });

        await classThunk.callActionCreator({ searchParams: new URLSearchParams() });
        expect(fetchArticleList).not.toHaveBeenCalled();
        expect(classThunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
