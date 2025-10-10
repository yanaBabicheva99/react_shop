import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Card } from './Card';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Card> = {
    title: 'widget/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const NormalCard: Story = {
    args: {},
};

NormalCard.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkCard: Story = {
    args: {},
};

DarkCard.decorators = ThemeDecorator(Theme.DARK);

export const OrangeCard: Story = {
    args: {},
};

OrangeCard.decorators = ThemeDecorator(Theme.ORANGE);
