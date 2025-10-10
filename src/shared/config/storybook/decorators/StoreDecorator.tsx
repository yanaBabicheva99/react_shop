import { StoryFn } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoreProvider, StateSchema } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUserName/testing';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { articleCommentListReducer } from '@/features/ArticleCommentList/testing';
import { addCommentFormReducer } from '@/entities/AddCommentForm/testing';
import { articleInfinityListReducer } from '@/features/ArticleInfinityList/testing';
import { articlesSortReducer } from '@/features/ArticlesSort/testing';
import { recommendationArticlesListReducer } from '@/features/RecommendationArticlesList/testing';
import { userReducer } from '@/entities/User';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: loginReducer,
    articleDetails: articleDetailsReducer,
    articleCommentList: articleCommentListReducer,
    addCommentForm: addCommentFormReducer,
    articleInfinityList: articleInfinityListReducer,
    articlesSort: articlesSortReducer,
    recommendationArticlesList: recommendationArticlesListReducer,
    user: userReducer,
};

export const StoreDecorator = (
    initialState?: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (Story: StoryFn) => (
    <StoreProvider
        initialState={initialState as StateSchema}
        asyncReducers={{
            ...defaultAsyncReducers,
            ...asyncReducers,
        }}
    >
        <Story />
    </StoreProvider>
);
