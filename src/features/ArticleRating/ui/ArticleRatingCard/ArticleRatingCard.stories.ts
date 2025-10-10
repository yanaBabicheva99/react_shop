import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ArticleRatingCard } from './ArticleRatingCard';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { Rating } from '@/entities/Rating';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ArticleRatingCard> = {
    title: 'features/ArticleRatingCard',
    component: ArticleRatingCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleRatingCard>;

const rating: Rating = {
    rate: 5,
    feedback: 'Хорошая статья',
};

export const NormalArticleRatingCard: Story = {
    args: { id: '1' },
};

NormalArticleRatingCard.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    user: { authData: { id: '1' } },
})];
NormalArticleRatingCard.parameters = {
    fetchMock: {
        mocks: [
            {
                matcher: `${__API__}/article-ratings?articleId=1&userId=1`, // URL to match
                response: [rating], // Mocked response
                delay: 500, // Optional delay
            },
        ],
    },
};

export const DarkArticleRatingCard: Story = {
    args: { id: '1' },
};

DarkArticleRatingCard.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: { id: '1' } },
})];

DarkArticleRatingCard.parameters = {
    fetchMock: {
        mocks: [
            {
                matcher: `${__API__}/article-ratings?articleId=1&userId=1`, // URL to match
                response: [rating], // Mocked response
                delay: 500, // Optional delay
            },
        ],
    },
};

export const OrangeArticleRatingCard: Story = {
    args: { id: '1' },
};

OrangeArticleRatingCard.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({
    user: { authData: { id: '1' } },
})];
OrangeArticleRatingCard.parameters = {
    fetchMock: {
        mocks: [
            {
                matcher: `${__API__}/article-ratings?articleId=1&userId=1`, // URL to match
                response: [rating], // Mocked response
                delay: 500, // Optional delay
            },
        ],
    },
};
