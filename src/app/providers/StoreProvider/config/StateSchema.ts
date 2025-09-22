import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import type { To } from 'history';
import { NavigateOptions } from 'react-router';
import { LoginSchema } from '@/features/AuthByUserName';
import { UserSchema } from '@/entities/User';
import { CounterSchema } from '@/entities/Counter';
import { ProfileSchema } from '@/features/EditableProfileCard';
import { ArticleDetailsSchema } from '@/entities/Article';
import { ArticleCommentListSchema } from '@/features/ArticleCommentList';
import { AddCommentFormSchema } from '@/entities/AddCommentForm';
import { ArticleInfinityListSchema } from '@/features/ArticleInfinityList';
import { ScrollTrackingSchema } from '@/features/ScrollTracking';
import { ArticlesSortSchema } from '@/features/ArticlesSort';
import { RecommendationArticlesListSchema } from '@/features/RecommendationArticlesList';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
    login?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleCommentList?: ArticleCommentListSchema;
    addCommentForm?: AddCommentFormSchema;
    articleInfinityList?: ArticleInfinityListSchema;
    recommendationArticlesList?: RecommendationArticlesListSchema;
    scroll: ScrollTrackingSchema;
    articlesSort?: ArticlesSortSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: CombinedState<StateSchema>, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface StoreWithReducerManager extends EnhancedStore {
    reducerManager: ReducerManager;
}

export interface ThunkExtraConfig {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    extra: ThunkExtraConfig;
    rejectValue: T;
    state: StateSchema;
}
