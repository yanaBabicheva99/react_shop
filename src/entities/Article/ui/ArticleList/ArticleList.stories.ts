import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
    title: 'widget/ArticleList',
    component: ArticleList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const NormalArticleList: Story = {
    args: {},
};

NormalArticleList.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkArticleList: Story = {
    args: {},
};

DarkArticleList.decorators = ThemeDecorator(Theme.DARK);

export const OrangeArticleList: Story = {
    args: {},
};

OrangeArticleList.decorators = ThemeDecorator(Theme.ORANGE);
