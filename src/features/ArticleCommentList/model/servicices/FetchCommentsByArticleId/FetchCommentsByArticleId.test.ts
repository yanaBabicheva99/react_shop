import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import clearAllMocks = jest.clearAllMocks;
import { fetchCommentsByArticleId } from '../FetchCommentsByArticleId/FetchCommentsByArticleId';

const data = [{
    id: '1',
    text: 'Some text',
    user: {
        id: '1',
        username: 'user 1',
    },
},
{
    id: '2',
    text: 'Some text',
    user: {
        id: '2',
        username: 'user 2',
    },
}];

describe('FetchCommentsByArticleId.test', () => {
    afterEach(() => {
        clearAllMocks();
    });

    test('fetch data success', async () => {
        const classThunk = new TestAsyncThunk(fetchCommentsByArticleId);
        classThunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await classThunk.callActionCreator('1');
        expect(classThunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('return error', async () => {
        const classThunk = new TestAsyncThunk(fetchCommentsByArticleId);
        classThunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await classThunk.callActionCreator('1');
        expect(classThunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
