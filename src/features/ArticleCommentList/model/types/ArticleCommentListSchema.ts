import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment/model/types/comment';

export interface ArticleCommentListSchema extends EntityState<Comment>{
    isLoading: boolean;
    error?: string;
}
