import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import Img from '../../assets/test/storybook/img.png';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const AvatarLite: Story = {
    args: {
        url: Img,
        alt: 'image',
    },
};

AvatarLite.decorators = ThemeDecorator(Theme.LIGHT);

export const AvatarDark: Story = {
    args: {
        url: Img,
        alt: 'image',
    },
};

AvatarDark.decorators = ThemeDecorator(Theme.DARK);
