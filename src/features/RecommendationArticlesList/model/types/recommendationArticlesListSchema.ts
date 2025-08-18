import { Article } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface RecommendationArticlesListSchema extends EntityState<Article>{
    isLoading: boolean,
    error?: string,
}
