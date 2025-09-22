import { StateSchema } from '@/app/providers/StoreProvider';

export const getIsLoadingCommentList = (state: StateSchema) => state?.articleCommentList?.isLoading;
export const getErrorCommentList = (state: StateSchema) => state?.articleCommentList?.error;
