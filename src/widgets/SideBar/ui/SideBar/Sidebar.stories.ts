import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SideBar } from './SideBar';

const meta: Meta<typeof SideBar> = {
    title: 'widget/SideBar',
    component: SideBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Sidebar: Story = {
    args: {},
};

Sidebar.decorators = ThemeDecorator(Theme.LIGHT);

export const SidebarDark: Story = {
    args: {},
};

SidebarDark.decorators = ThemeDecorator(Theme.DARK);
