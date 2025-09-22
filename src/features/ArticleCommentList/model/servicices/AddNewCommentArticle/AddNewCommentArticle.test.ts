import { TestAsyncThunk } from '@/shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    addNewCommentArticle,
} from '../AddNewCommentArticle/AddNewCommentArticle';
import clearAllMocks = jest.clearAllMocks;

const state: DeepPartial<StateSchema> = {
    user: {
        authData: {
            id: '1',
            username: 'user',
        },
    },
    articleDetails: {
        data: { id: '1' },
    },
};

const data = {
    id: '1',
    text: 'Some text',
    user: {
        id: '1',
        username: 'user',
    },
};

describe('AddNewCommentArticle.test', () => {
    afterEach(() => {
        clearAllMocks();
    });

    test('fetch data success', async () => {
        const classThunk = new TestAsyncThunk(addNewCommentArticle, state);
        classThunk.api.post.mockReturnValue(Promise.resolve({ data }));
        const result = await classThunk.callActionCreator({ id: '1', text: 'Some text' });
        expect(classThunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('fetch data error', async () => {
        const classThunk = new TestAsyncThunk(addNewCommentArticle, {
            ...state,
            articleDetails: undefined,
        });
        const result = await classThunk.callActionCreator({ id: '1', text: 'Some text' });
        expect(classThunk.api.post).not.toHaveBeenCalled();
        expect(result.payload).toBe('error');
    });

    test('return error', async () => {
        const classThunk = new TestAsyncThunk(addNewCommentArticle, state);
        classThunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await classThunk.callActionCreator({ id: '1', text: 'Some text' });
        expect(classThunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
