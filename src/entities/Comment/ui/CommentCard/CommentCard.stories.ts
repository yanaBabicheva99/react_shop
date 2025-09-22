import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import Img from '@/shared/assets/test/storybook/img.png';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const NormalCommentCard: Story = {
    args: {
        comment: {
            id: '1',
            text: 'Text Card comments',
            user: {
                id: '1',
                username: 'username',
                avatar: Img,
            },
        },
    },
};

NormalCommentCard.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkCommentCard: Story = {
    args: {
        comment: {
            id: '1',
            text: 'Text Card comments',
            user: {
                id: '1',
                username: 'username',
                avatar: Img,
            },
        },
    },
};

DarkCommentCard.decorators = ThemeDecorator(Theme.DARK);

export const OrangeCommentCard: Story = {
    args: {
        comment: {
            id: '1',
            text: 'Text Card comments',
            user: {
                id: '1',
                username: 'username',
                avatar: Img,
            },
        },
    },
};

OrangeCommentCard.decorators = ThemeDecorator(Theme.ORANGE);

export const loadingCommentCard: Story = {
    args: {
        isLoading: true,
    },
};

loadingCommentCard.decorators = ThemeDecorator(Theme.LIGHT);

export const loadingCommentCardDark: Story = {
    args: {
        isLoading: true,
    },
};

loadingCommentCardDark.decorators = ThemeDecorator(Theme.DARK);

export const loadingCommentCardOrange: Story = {
    args: {
        isLoading: true,
    },
};

loadingCommentCardOrange.decorators = ThemeDecorator(Theme.ORANGE);
