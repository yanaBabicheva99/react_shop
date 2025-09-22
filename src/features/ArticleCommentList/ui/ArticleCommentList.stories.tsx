import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import Img from '@/shared/assets/test/storybook/img.png';
import JsImg from '@/shared/assets/test/storybook/js.png';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ArticleCommentList } from './ArticleCommentList';

const entities = {
    1: {
        id: '1',
        text: 'Text Card comments 1',
        user: {
            id: '1',
            username: 'username',
            avatar: Img,
        },
    },
    2: {
        id: '2',
        text: 'Text Card comments 2',
        user: {
            id: '2',
            username: 'username 2',
            avatar: JsImg,
        },
    },
};

const meta: Meta<typeof ArticleCommentList> = {
    title: 'features/ArticleCommentList',
    component: ArticleCommentList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleCommentList>;

export const NormalArticleCommentList: Story = {
    args: {},
};

NormalArticleCommentList.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    articleCommentList: {
        ids: [1, 2],
        entities,
    },
})];

export const DarkArticleCommentList: Story = {
    args: {},
};

DarkArticleCommentList.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleCommentList: {
        ids: [1, 2],
        entities,
    },
})];

export const OrangeArticleCommentList: Story = {
    args: {},
};

OrangeArticleCommentList.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({
    articleCommentList: {
        ids: [1, 2],
        entities,
    },
})];

export const LoadingArticleCommentList: Story = {
    args: {},
};

LoadingArticleCommentList.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    articleCommentList: {
        ids: [],
        entities: {},
        isLoading: true,
    },
})];

export const LoadingArticleCommentListDark: Story = {
    args: {},
};

LoadingArticleCommentListDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleCommentList: {
        ids: [],
        entities: {},
        isLoading: true,
    },
})];
