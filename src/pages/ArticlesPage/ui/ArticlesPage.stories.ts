import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const NormalArticlesPage: Story = {
    args: {},
};

NormalArticlesPage.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkArticlesPage: Story = {
    args: {},
};

DarkArticlesPage.decorators = ThemeDecorator(Theme.DARK);
