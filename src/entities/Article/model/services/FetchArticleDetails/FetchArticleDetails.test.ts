import { TestAsyncThunk } from '@/shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { ArticleType } from '../../consts/articleConsts';
import { fetchArticleDetails } from './FetchArticleDetails';

const data = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
};

describe('FetchArticleDetails.test', () => {
    test('return success', async () => {
        const classThunk = new TestAsyncThunk(fetchArticleDetails);
        classThunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await classThunk.callActionCreator('1');
        expect(classThunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('return error', async () => {
        const classThunk = new TestAsyncThunk(fetchArticleDetails);
        classThunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await classThunk.callActionCreator('1');
        expect(classThunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
