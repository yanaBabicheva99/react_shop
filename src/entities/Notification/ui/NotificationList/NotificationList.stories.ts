import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { Notification } from '../../model/types/notification';
import { NotificationList } from './NotificationList';

const notification: Notification[] = [
    {
        id: '1',
        title: 'Уведомление',
        description: 'Описание уведомления',
        userId: '1',
    },
    {
        id: '2',
        title: 'Уведомление 2',
        description: 'Описание уведомления 2',
        userId: '1',
    },
    {
        id: '3',
        title: 'Уведомление 3',
        description: 'Описание уведомления 3',
        userId: '2',
    },
];

const meta: Meta<typeof NotificationList> = {
    title: 'entities/NotificationList',
    component: NotificationList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const NormalNotificationList: Story = {
    args: {},
};

NormalNotificationList.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
NormalNotificationList.parameters = {
    fetchMock: {
        mocks: [
            {
                matcher: `${__API__}/notifications`, // URL to match
                response: notification, // Mocked response
                delay: 500, // Optional delay
            },
        ],
    },
};

export const DarkNotificationList: Story = {
    args: {},
};

DarkNotificationList.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
DarkNotificationList.parameters = {
    fetchMock: {
        mocks: [
            {
                matcher: `${__API__}/notifications`, // URL to match
                response: notification, // Mocked response
                delay: 500, // Optional delay
            },
        ],
    },
};

export const OrangeNotificationList: Story = {
    args: {},
};

OrangeNotificationList.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({})];
OrangeNotificationList.parameters = {
    fetchMock: {
        mocks: [
            {
                matcher: `${__API__}/notifications`, // URL to match
                response: notification, // Mocked response
                delay: 500, // Optional delay
            },
        ],
    },
};
