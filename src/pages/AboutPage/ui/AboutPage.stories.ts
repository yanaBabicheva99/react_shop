import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const AboutPageLite: Story = {
    args: {},
};

AboutPageLite.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator()];

export const AboutPageDark: Story = {
    args: {},
};

AboutPageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator()];
