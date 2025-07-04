import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const LoginFormLite: Story = {
    args: {
    },
};

LoginFormLite.decorators = ThemeDecorator(Theme.LIGHT);

export const LoginFormDark: Story = {
    args: {
    },
};

LoginFormDark.decorators = ThemeDecorator(Theme.DARK);
