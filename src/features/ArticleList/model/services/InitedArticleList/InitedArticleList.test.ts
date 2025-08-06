import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleList } from '../FetchArticleList/FetchArticleList';
import { articleListAction } from '../../slice/ArticleListSlice';
import { initedArticleList } from './InitedArticleList';

jest.mock('../FetchArticleList/FetchArticleList');

describe('InitedArticleList.test', () => {
    test('test not inited', async () => {
        const classThunk = new TestAsyncThunk(initedArticleList, {
            articleList: {
                _inited: false,
            },
        });

        await classThunk.callActionCreator();
        expect(classThunk.dispatch).toHaveBeenCalledWith(articleListAction.initState());
        expect(fetchArticleList).toHaveBeenCalled();
        expect(classThunk.dispatch).toHaveBeenCalledTimes(4);
    });

    test('test inited', async () => {
        const classThunk = new TestAsyncThunk(initedArticleList, {
            articleList: {
                _inited: true,
            },
        });

        await classThunk.callActionCreator();
        expect(fetchArticleList).not.toHaveBeenCalled();
        expect(classThunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
