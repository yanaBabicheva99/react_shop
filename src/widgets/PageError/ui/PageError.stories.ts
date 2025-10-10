import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { PageError } from './PageError';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const PageErrorLite: Story = {
    args: {},
};

PageErrorLite.decorators = ThemeDecorator(Theme.LIGHT);

export const PageErrorDark: Story = {
    args: {},
};

PageErrorDark.decorators = ThemeDecorator(Theme.DARK);
