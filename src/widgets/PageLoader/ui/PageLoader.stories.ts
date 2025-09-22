import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
    title: 'widget/PageLoader',
    component: PageLoader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
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
