import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import ArticleEditPage from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'widget/ArticleEditPage',
    component: ArticleEditPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const NormalArticleEditPage: Story = {
    args: {},
};

NormalArticleEditPage.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator()];

export const DarkArticleEditPage: Story = {
    args: {},
};

DarkArticleEditPage.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator()];

export const OrangeArticleEditPage: Story = {
    args: {},
};

OrangeArticleEditPage.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator()];
