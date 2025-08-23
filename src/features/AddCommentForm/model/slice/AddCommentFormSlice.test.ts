import { AddCommentFormSchema } from '../types/addCommentFormSchema';
import { addCommentFormReducer, addCommentFormActions } from './AddCommentFormSlice';

describe('AddCommentFormSlice.test', () => {
    test('test with value', () => {
        const state: AddCommentFormSchema = {
            text: '',
        };
        expect(addCommentFormReducer(state, addCommentFormActions.setTextComment('Text'))).toEqual({
            text: 'Text',
        });
    });

    test('test with empty', () => {
        expect(addCommentFormReducer(undefined, addCommentFormActions.setTextComment('Text'))).toEqual({
            text: 'Text',
        });
    });
});
