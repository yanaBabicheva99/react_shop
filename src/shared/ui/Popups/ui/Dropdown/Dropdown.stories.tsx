import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Button, ThemeButton } from '../../../Button/Button';
import { Dropdown } from './Dropdown';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const NormalDropdown: Story = {
    args: {
        trigger: <Button theme={ThemeButton.OUTLINE}>Menu</Button>,
        direction: 'top left',
        options: [
            { content: 'First' },
            { content: 'Second' },
        ],
    },
};

NormalDropdown.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkDropdown: Story = {
    args: {
        trigger: <Button theme={ThemeButton.OUTLINE}>Menu</Button>,
        direction: 'top right',
        options: [
            { content: 'First' },
            { content: 'Second' },
        ],
    },
};

DarkDropdown.decorators = ThemeDecorator(Theme.DARK);

export const OrangeDropdown: Story = {
    args: {
        trigger: <Button theme={ThemeButton.OUTLINE}>Menu</Button>,
        direction: 'bottom left',
        options: [
            { content: 'First' },
            { content: 'Second' },
        ],
    },
};

OrangeDropdown.decorators = ThemeDecorator(Theme.ORANGE);
