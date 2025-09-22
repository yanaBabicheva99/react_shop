import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const CircleSkeleton: Story = {
    args: {
        width: 100,
        height: 100,
        border: '50%',
    },
};

CircleSkeleton.decorators = ThemeDecorator(Theme.LIGHT);

export const CircleSkeletonDark: Story = {
    args: {
        width: 100,
        height: 100,
        border: '50%',
    },
};

CircleSkeletonDark.decorators = ThemeDecorator(Theme.DARK);

export const NormalSkeleton: Story = {
    args: {
        width: 300,
        height: 100,
    },
};

NormalSkeleton.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkSkeleton: Story = {
    args: {
        width: 300,
        height: 100,
    },
};

DarkSkeleton.decorators = ThemeDecorator(Theme.DARK);
