import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { profileReducer } from '@/features/EditableProfileCard';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const ProfilePageLite: Story = {
    args: {},
};

ProfilePageLite.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    profile: {
        readonly: true,
    },
}, { profile: profileReducer })];

export const ProfilePageDark: Story = {
    args: {},
};

ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        readonly: true,
    },
}, { profile: profileReducer })];
