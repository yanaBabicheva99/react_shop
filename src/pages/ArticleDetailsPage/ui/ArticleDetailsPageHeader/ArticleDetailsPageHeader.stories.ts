import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: 'widget/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const NormalArticleDetailsPageHeader: Story = {
    args: {},
};

NormalArticleDetailsPageHeader.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator()];

export const DarkArticleDetailsPageHeader: Story = {
    args: {},
};

DarkArticleDetailsPageHeader.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator()];

export const OrangeArticleDetailsPageHeader: Story = {
    args: {},
};

OrangeArticleDetailsPageHeader.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator()];
