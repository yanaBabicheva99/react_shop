import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LinkTheme, NavLink } from './NavLink';

const meta: Meta<typeof NavLink> = {
    title: 'shared/NavLink',
    component: NavLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NavLink>;

export const PrimaryLinkLite: Story = {
    args: {
        children: 'Link',
        theme: LinkTheme.PRIMARY,
        to: '/',
    },
};

PrimaryLinkLite.decorators = ThemeDecorator(Theme.LIGHT);

export const PrimaryLinkDark: Story = {
    args: {
        children: 'Link',
        theme: LinkTheme.PRIMARY,
        to: '/',
    },
};

PrimaryLinkDark.decorators = ThemeDecorator(Theme.DARK);

export const SecondaryLinkLite: Story = {
    args: {
        children: 'Link',
        theme: LinkTheme.SECONDARY,
        to: '/',
    },
};

SecondaryLinkLite.decorators = ThemeDecorator(Theme.LIGHT);

export const SecondaryLinkDark: Story = {
    args: {
        children: 'Link',
        theme: LinkTheme.SECONDARY,
        to: '/',
    },
};

SecondaryLinkDark.decorators = ThemeDecorator(Theme.DARK);
