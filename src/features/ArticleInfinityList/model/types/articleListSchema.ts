import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from '@/entities/Article';

export interface ArticleInfinityListSchema extends EntityState<Article> {
    isLoading: boolean;
    articleView?: ArticleView;
    error?: string;
    hasMore: boolean;
    page: number;
    limit: number;
    _inited: boolean;
}
