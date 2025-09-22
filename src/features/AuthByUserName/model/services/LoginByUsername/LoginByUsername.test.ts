import { TestAsyncThunk } from '@/shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { userActions } from '@/entities/User';
import { loginByUsername } from './LoginByUsername';
import clearAllMocks = jest.clearAllMocks;

describe('LoginByUsername.test', () => {
    afterEach(() => {
        clearAllMocks();
    });

    test('return success', async () => {
        const userValue = { username: 'user', id: '1' };
        const classThunk = new TestAsyncThunk(loginByUsername);
        classThunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await classThunk.callActionCreator({ username: 'user', password: '123' });
        expect(classThunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(classThunk.dispatch).toHaveBeenCalledTimes(3);
        expect(classThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    });

    test('return error', async () => {
        const classThunk = new TestAsyncThunk(loginByUsername);
        classThunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await classThunk.callActionCreator({ username: 'user', password: '123' });
        expect(classThunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
        expect(classThunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
