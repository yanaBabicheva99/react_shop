import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { NotificationItem } from './NotificationItem';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/NotificationItem',
    component: NotificationItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const NormalNotificationItem: Story = {
    args: {
        notification: {
            id: '1',
            title: 'Заголовок уведомления',
            description: 'Текст уведомления',
            userId: '1',
        },
    },
};

NormalNotificationItem.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkNotificationItem: Story = {
    args: {
        notification: {
            id: '1',
            title: 'Заголовок уведомления',
            description: 'Текст уведомления',
            userId: '1',
        },
    },
};

DarkNotificationItem.decorators = ThemeDecorator(Theme.DARK);

export const OrangeNotificationItem: Story = {
    args: {
        notification: {
            id: '1',
            title: 'Заголовок уведомления',
            description: 'Текст уведомления',
            userId: '1',
        },
    },
};

OrangeNotificationItem.decorators = ThemeDecorator(Theme.ORANGE);
