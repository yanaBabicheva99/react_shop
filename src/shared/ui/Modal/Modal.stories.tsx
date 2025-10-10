import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalLite: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    },
};

ModalLite.decorators = ThemeDecorator(Theme.LIGHT);

export const ModalDark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    },
};

ModalDark.decorators = ThemeDecorator(Theme.DARK);
