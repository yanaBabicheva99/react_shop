import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: (Story: StoryFn) => <div style={{ padding: '100px' }}><Story /></div>,
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const ListBoxBottomLeft: Story = {
    args: {
        direction: 'bottom left',
        label: 'Выбирите опцию',
        options: [
            { value: 'value 1', content: 'Option 1', disabled: true },
            { value: 'value 2', content: 'Option 2' },
            { value: 'value 3', content: 'Option 3' },
        ],
        value: 'value 2',
    },
};

ListBoxBottomLeft.decorators = ThemeDecorator(Theme.LIGHT);

export const ListBoxBottomRight: Story = {
    args: {
        direction: 'bottom right',
        label: 'Выбирите опцию',
        options: [
            { value: 'value 1', content: 'Option 1' },
            { value: 'value 2', content: 'Option 2' },
            { value: 'value 3', content: 'Option 3' },
        ],
        value: 'value 2',
    },
};

ListBoxBottomRight.decorators = ThemeDecorator(Theme.DARK);

export const ListBoxTopLeft: Story = {
    args: {
        direction: 'top left',
        label: 'Выбирите опцию',
        options: [
            { value: 'value 1', content: 'Option 1' },
            { value: 'value 2', content: 'Option 2' },
            { value: 'value 3', content: 'Option 3' },
        ],
        value: 'value 2',
    },
};

ListBoxTopLeft.decorators = ThemeDecorator(Theme.ORANGE);

export const ListBoxTopRight: Story = {
    args: {
        direction: 'top right',
        label: 'Выбирите опцию',
        options: [
            { value: 'value 1', content: 'Option 1' },
            { value: 'value 2', content: 'Option 2' },
            { value: 'value 3', content: 'Option 3' },
        ],
        value: 'value 2',
    },
};

ListBoxTopRight.decorators = ThemeDecorator(Theme.ORANGE);
