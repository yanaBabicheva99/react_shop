import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import MainPage from './MainPage';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const MainPageLite: Story = {
    args: {},
};

MainPageLite.decorators = [StoreDecorator(), ThemeDecorator(Theme.LIGHT)];

export const MainPageDark: Story = {
    args: {},
};

MainPageDark.decorators = [StoreDecorator(), ThemeDecorator(Theme.DARK)];
