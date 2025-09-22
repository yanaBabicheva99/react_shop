import { StateSchema } from '@/app/providers/StoreProvider';
import { getCommentFormText } from './getCommentForm';

describe('getCommentForm.test', () => {
    test('test witch value', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'Some text',
            },
        };
        expect(getCommentFormText(state as StateSchema)).toBe('Some text');
    });

    test('test witch empty', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {},
        };
        expect(getCommentFormText(state as StateSchema)).toBe(undefined);
    });
});
