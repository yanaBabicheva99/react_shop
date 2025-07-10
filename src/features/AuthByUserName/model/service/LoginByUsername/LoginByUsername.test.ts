import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { userActions } from 'entities/User';
import { loginByUsername } from './LoginByUsername';
import clearAllMocks = jest.clearAllMocks;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('LoginByUsername.test', () => {
    afterEach(() => {
        clearAllMocks();
    });

    test('return success', async () => {
        const userValue = { username: 'user', id: 1 };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const classThunk = new TestAsyncThunk(loginByUsername);
        const result = await classThunk.callActionCreator({ username: 'user', password: '123' });
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(classThunk.dispatch).toHaveBeenCalledTimes(3);
        expect(classThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    });

    test('return error', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const classThunk = new TestAsyncThunk(loginByUsername);
        const result = await classThunk.callActionCreator({ username: 'user', password: '123' });
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
        expect(classThunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
