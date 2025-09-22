import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment/model/types/comment';
import { getUserAuthData } from '@/entities/User';
import { getArticle } from '@/entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from '../FetchCommentsByArticleId/FetchCommentsByArticleId';

interface AddNewCommentArticleArgs {
    id?: string;
    text: string
}

export const addNewCommentArticle = createAsyncThunk<Comment, AddNewCommentArticleArgs, ThunkConfig<string>>(
    'articleCommentList/AddNewCommentArticle',
    async (args, thunkAPI) => {
        const {
            extra, rejectWithValue, dispatch, getState,
        } = thunkAPI;

        const user = getUserAuthData(getState());
        const article = getArticle(getState());

        if (!args.text || !args.id || !user || !article) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.post('/comments', {
                text: args.text,
                articleId: article.id,
                userId: user.id,
            });
            if (!response.data) {
                throw new Error('error');
            }

            await dispatch(fetchCommentsByArticleId(args.id));

            return response.data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
