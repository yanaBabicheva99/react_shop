import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { RatingCard } from './RatingCard';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof RatingCard> = {
    title: 'entities/RatingCard',
    component: RatingCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const NormalRatingCard: Story = {
    args: {
        title: 'Как вам статья ?',
        feedbackTitle: 'Оставьте отзыв',
        hasFeedBack: true,
    },
};

NormalRatingCard.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkRatingCard: Story = {
    args: {
        title: 'Как вам статья ?',
        feedbackTitle: 'Оставьте отзыв',
        hasFeedBack: true,
    },
};

DarkRatingCard.decorators = ThemeDecorator(Theme.DARK);

export const OrangeRatingCard: Story = {
    args: {
        title: 'Как вам статья ?',
        feedbackTitle: 'Оставьте отзыв',
        hasFeedBack: true,
    },
};

OrangeRatingCard.decorators = ThemeDecorator(Theme.ORANGE);
