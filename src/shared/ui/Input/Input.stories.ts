import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputLite: Story = {
    args: {
        value: 'Text',
        placeholder: 'Введите текст',
        autoFocus: true,
    },
};

InputLite.decorators = ThemeDecorator(Theme.LIGHT);

export const InputDark: Story = {
    args: {
        value: 'Text',
        placeholder: 'Введите текст',
        autoFocus: true,
    },
};

InputDark.decorators = ThemeDecorator(Theme.DARK);
