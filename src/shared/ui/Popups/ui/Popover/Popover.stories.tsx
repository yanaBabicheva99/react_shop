import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Button, ThemeButton } from '../../../Button/Button';
import { VStack } from '../../../Stack';
import { Text } from '../../../Text/Text';
import { Popover } from './Popover';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Popover> = {
    title: 'shared/Popover',
    component: Popover,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const NormalPopover: Story = {
    args: {
        trigger: <Button theme={ThemeButton.OUTLINE}>Click</Button>,
        children: (
            <VStack gap="8">
                <Text text="text 1" />
                <Text text="text 2" />
                <Text text="text 3" />
            </VStack>
        ),
    },
};

NormalPopover.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkPopover: Story = {
    args: {
        trigger: <Button theme={ThemeButton.OUTLINE}>Click</Button>,
        children: (
            <VStack gap="8">
                <Text text="text 1" />
                <Text text="text 2" />
                <Text text="text 3" />
            </VStack>
        ),
    },
};

DarkPopover.decorators = ThemeDecorator(Theme.DARK);

export const OrangePopover: Story = {
    args: {
        trigger: <Button theme={ThemeButton.OUTLINE}>Click</Button>,
        children: (
            <VStack gap="8">
                <Text text="text 1" />
                <Text text="text 2" />
                <Text text="text 3" />
            </VStack>
        ),
    },
};

OrangePopover.decorators = ThemeDecorator(Theme.ORANGE);
