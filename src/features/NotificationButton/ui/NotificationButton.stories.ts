import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Notification } from 'entities/Notification/model/types/notification';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { NotificationButton } from './NotificationButton';

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

const meta: Meta<typeof NotificationButton> = {
    title: 'features/NotificationButton',
    component: NotificationButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const NormalNotificationButton: Story = {
    args: {},
};

NormalNotificationButton.parameters = {
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

NormalNotificationButton.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const DarkNotificationButton: Story = {
    args: {},
};

DarkNotificationButton.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
DarkNotificationButton.parameters = {
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
