import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectLite: Story = {
    args: {
        label: 'Выбирите опцию',
        options: [
            { value: '1', content: 'Option 1' },
            { value: '2', content: 'Option 2' },
            { value: '3', content: 'Option 3' },
        ],
        value: '1',
    },
};

SelectLite.decorators = ThemeDecorator(Theme.LIGHT);

export const SelectDark: Story = {
    args: {
        label: 'Выбирите опцию',
        options: [
            { value: '1', content: 'Option 1' },
            { value: '2', content: 'Option 2' },
            { value: '3', content: 'Option 3' },
        ],
        value: '1',
    },
};

SelectDark.decorators = ThemeDecorator(Theme.DARK);
