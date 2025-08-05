import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ArticleView } from '../types/articleView';

export interface ArticleListSchema extends EntityState<Article>{
    isLoading: boolean;
    isLoadingNextPage: boolean;
    articleView?: ArticleView;
    error?: string;
    hasMore: boolean;
    page: number;
    limit?: number;
}
