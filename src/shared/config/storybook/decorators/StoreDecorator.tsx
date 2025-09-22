import { StoryFn } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { loginReducer } from '@/features/AuthByUserName';
import { articleDetailsReducer } from '@/entities/Article';
import { articleCommentListReducer } from '@/features/ArticleCommentList';
import { addCommentFormReducer } from '@/entities/AddCommentForm';
import { articleInfinityListReducer } from '@/features/ArticleInfinityList';
import { articlesSortReducer } from '@/features/ArticlesSort';
import { recommendationArticlesListReducer } from '@/features/RecommendationArticlesList';
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
