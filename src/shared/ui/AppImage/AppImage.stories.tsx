import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { AppImage } from './AppImage';
import { Theme } from '@/shared/const/theme';
import { Skeleton } from '../Skeleton';
import AppImageFallback from '../../assets/avatarFallback.svg';
import ImagePng from '../../assets/image.png';
import { Icon } from '../Icon';

const meta: Meta<typeof AppImage> = {
    title: 'shared/AppImage',
    component: AppImage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const NormalAppImage: Story = {
    args: {
        src: ImagePng,
        alt: 'img',
        fallback: <Skeleton width={50} height={50} border="50%" />,
        fallbackError: <Icon width={50} height={50} Icon={AppImageFallback} />,
    },
};

NormalAppImage.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkAppImage: Story = {
    args: {
        src: ImagePng,
        alt: 'img',
        fallback: <Skeleton width={50} height={50} border="50%" />,
        fallbackError: <Icon width={50} height={50} Icon={AppImageFallback} />,
    },
};

DarkAppImage.decorators = ThemeDecorator(Theme.DARK);

export const OrangeAppImage: Story = {
    args: {
        src: ImagePng,
        alt: 'img',
        fallback: <Skeleton width={50} height={50} border="50%" />,
        fallbackError: <Icon width={50} height={50} Icon={AppImageFallback} />,
    },
};

OrangeAppImage.decorators = ThemeDecorator(Theme.ORANGE);
