import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFound } from './NotFound';

const meta: Meta<typeof NotFound> = {
    title: 'pages/NotFound',
    component: NotFound,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const NotFoundLite: Story = {
    args: {},
};

NotFoundLite.decorators = ThemeDecorator(Theme.LIGHT);

export const NotFoundDark: Story = {
    args: {},
};

NotFoundDark.decorators = ThemeDecorator(Theme.DARK);
