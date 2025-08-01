import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const NormalAddCommentForm: Story = {
    args: {},
};

NormalAddCommentForm.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator()];

export const DarkAddCommentForm: Story = {
    args: {},
};

DarkAddCommentForm.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator()];

export const OrangeAddCommentForm: Story = {
    args: {},
};

OrangeAddCommentForm.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator()];
