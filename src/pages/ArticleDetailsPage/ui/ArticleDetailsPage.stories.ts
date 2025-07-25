import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const NormalArticleDetailsPage: Story = {
    args: {},
};

NormalArticleDetailsPage.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkArticleDetailsPage: Story = {
    args: {},
};

DarkArticleDetailsPage.decorators = ThemeDecorator(Theme.DARK);
