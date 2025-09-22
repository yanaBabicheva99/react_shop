import { StateSchema } from '@/app/providers/StoreProvider';
import { getIsLoadingCommentList, getErrorCommentList } from './ArticleCommentList';

describe('ArticleCommentList.test', () => {
    test('test getIsLoadingCommentList', () => {
        const state: DeepPartial<StateSchema> = {
            articleCommentList: {
                isLoading: true,
            },
        };
        expect(getIsLoadingCommentList(state as StateSchema)).toBe(true);
    });

    test('test getIsLoadingCommentList empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getIsLoadingCommentList(state as StateSchema)).toBe(undefined);
    });

    test('test getErrorValue', () => {
        const state: DeepPartial<StateSchema> = {
            articleCommentList: {
                error: 'Error',
            },
        };
        expect(getErrorCommentList(state as StateSchema)).toBe('Error');
    });

    test('test getErrorValue empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getErrorCommentList(state as StateSchema)).toBe(undefined);
    });
});
