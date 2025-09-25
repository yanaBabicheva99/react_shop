import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
    title: 'shared/StarRating',
    component: StarRating,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const NormalStarRating: Story = {
    args: { selectedStars: 3 },
};

NormalStarRating.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkStarRating: Story = {
    args: { selectedStars: 3 },
};

DarkStarRating.decorators = ThemeDecorator(Theme.DARK);

export const OrangeStarRating: Story = {
    args: { selectedStars: 3 },
};

OrangeStarRating.decorators = ThemeDecorator(Theme.ORANGE);
