import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NavBar } from './Navbar';

const meta: Meta<typeof NavBar> = {
    title: 'widget/NavBar',
    component: NavBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const NavBarLite: Story = {
    args: {},
};

NavBarLite.decorators = ThemeDecorator(Theme.LIGHT);

export const NavBarDark: Story = {
    args: {},
};

NavBarDark.decorators = ThemeDecorator(Theme.DARK);
