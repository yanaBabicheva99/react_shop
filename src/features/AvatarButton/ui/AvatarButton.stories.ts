import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { UserRole } from '@/entities/User/model/consts/UserConsts';
import AvatarIcon from '@/shared/assets/test/storybook/img.png';
import { AvatarButton } from './AvatarButton';

const meta: Meta<typeof AvatarButton> = {
    title: 'features/AvatarButton',
    component: AvatarButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AvatarButton>;

export const NormalAvatarButton: Story = {
    args: {},
};

NormalAvatarButton.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    user: {
        authData: {
            id: '1', username: 'admin', avatar: AvatarIcon, roles: [UserRole.ADMIN],
        },
    },
})];

export const DarkAvatarButton: Story = {
    args: {},
};

DarkAvatarButton.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: {
            id: '1', username: 'admin', avatar: AvatarIcon, roles: [UserRole.ADMIN],
        },
    },
})];

export const OrangeAvatarButton: Story = {
    args: {},
};

OrangeAvatarButton.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({
    user: {
        authData: {
            id: '1', username: 'admin', avatar: AvatarIcon, roles: [UserRole.ADMIN],
        },
    },
})];
