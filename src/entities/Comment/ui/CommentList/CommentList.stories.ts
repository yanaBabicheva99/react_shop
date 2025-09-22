import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import Img from '@/shared/assets/test/storybook/img.png';
import JsImg from '@/shared/assets/test/storybook/js.png';

import { CommentList } from './CommentList';

const args = {
    comments: [{
        id: '1',
        text: 'Text Card comments 1',
        user: {
            id: '1',
            username: 'username',
            avatar: Img,
        },
    },
    {
        id: '2',
        text: 'Text Card comments 2',
        user: {
            id: '2',
            username: 'username 2',
            avatar: JsImg,
        },
    },
    ],
};

const meta: Meta<typeof CommentList> = {
    title: 'entities/CommentList',
    component: CommentList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const NormalCommentList: Story = {
    args,
};

NormalCommentList.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkCommentList: Story = {
    args,
};

DarkCommentList.decorators = ThemeDecorator(Theme.DARK);

export const OrangeCommentList: Story = {
    args,
};

OrangeCommentList.decorators = ThemeDecorator(Theme.ORANGE);

export const LoadingCommentList: Story = {
    args: {
        isLoading: true,
    },
};

LoadingCommentList.decorators = ThemeDecorator(Theme.LIGHT);

export const LoadingCommentListDark: Story = {
    args: {
        isLoading: true,
    },
};

LoadingCommentListDark.decorators = ThemeDecorator(Theme.DARK);

export const LoadingCommentListOrange: Story = {
    args: {
        isLoading: true,
    },
};

LoadingCommentListOrange.decorators = ThemeDecorator(Theme.ORANGE);
