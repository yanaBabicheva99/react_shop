import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ArticlesSort } from './ArticlesSort';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ArticlesSort> = {
    title: 'features/ArticlesSort',
    component: ArticlesSort,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesSort>;

export const NormalArticlesSort: Story = {
    args: {},
};

NormalArticlesSort.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator()];

export const DarkArticlesSort: Story = {
    args: {},
};

DarkArticlesSort.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator()];

export const OrangeArticlesSort: Story = {
    args: {},
};

OrangeArticlesSort.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator()];
