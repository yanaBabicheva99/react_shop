import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { PageLoader } from './PageLoader';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof PageLoader> = {
    title: 'widget/PageLoader',
    component: PageLoader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const PageLoaderLite: Story = {
    args: {},
};

PageLoaderLite.decorators = ThemeDecorator(Theme.LIGHT);

export const PageLoaderDark: Story = {
    args: {},
};

PageLoaderDark.decorators = ThemeDecorator(Theme.DARK);
