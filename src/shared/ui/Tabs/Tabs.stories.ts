import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { ArticleType } from '@/entities/Article';
import { Tabs } from './Tabs';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const NormalTabs: Story = {
    args: {
        tabs: [
            { value: ArticleType.IT, content: 'Tab1' },
            { value: ArticleType.SCIENCE, content: 'Tab2' },
            { value: ArticleType.ECONOMICS, content: 'Tab3' },
        ],
        value: ArticleType.SCIENCE,
    },
};

NormalTabs.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkTabs: Story = {
    args: {
        tabs: [
            { value: ArticleType.IT, content: 'Tab1' },
            { value: ArticleType.SCIENCE, content: 'Tab2' },
            { value: ArticleType.ECONOMICS, content: 'Tab3' },
        ],
        value: ArticleType.SCIENCE,
    },
};

DarkTabs.decorators = ThemeDecorator(Theme.DARK);

export const OrangeTabs: Story = {
    args: {
        tabs: [
            { value: ArticleType.IT, content: 'Tab1' },
            { value: ArticleType.SCIENCE, content: 'Tab2' },
            { value: ArticleType.ECONOMICS, content: 'Tab3' },
        ],
        value: ArticleType.SCIENCE,
    },
};

OrangeTabs.decorators = ThemeDecorator(Theme.ORANGE);
