import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { LoginModal } from './LoginModal';

const meta: Meta<typeof LoginModal> = {
    title: 'features/LoginModal',
    component: LoginModal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const LoginModalLite: Story = {
    args: {
        isOpen: true,
    },
};

LoginModalLite.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator()];

export const LoginModalDark: Story = {
    args: {
        isOpen: true,
    },
};

LoginModalDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator()];
