import { FC, lazy } from 'react';
import { AddCommentFormProps } from '../ui/AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((res) => setTimeout(() => {
    // @ts-ignore
    res(import('./AddCommentForm'));
}, 1000)));
