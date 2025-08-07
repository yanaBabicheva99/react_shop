import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import type { To } from 'history';
import { NavigateOptions } from 'react-router';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleCommentListSchema } from 'features/ArticleCommentList';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticleListSchema } from 'features/ArticleList';
import { ScrollTrackingSchema } from 'features/ScrollTracking';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    login?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleCommentList?: ArticleCommentListSchema;
    addCommentForm?: AddCommentFormSchema;
    articleList?: ArticleListSchema;
    scroll: ScrollTrackingSchema;
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
