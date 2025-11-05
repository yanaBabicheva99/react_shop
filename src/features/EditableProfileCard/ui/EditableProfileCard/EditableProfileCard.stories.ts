import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ValidateProfileError } from '../../model/consts/editableProfileConsts';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const EditableProfileCardLite: Story = {
    args: {},
};

EditableProfileCardLite.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator()];

export const EditableProfileCardDark: Story = {
    args: {},
};

EditableProfileCardDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator()];

export const EditableProfileCardLoading: Story = {
    args: {},
};

EditableProfileCardLoading.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator(
        {
            profile: {
                isLoading: true,
            },
        },
        { profile: profileReducer },
    ),
];

export const EditableProfileCardLoadingDark: Story = {
    args: {},
};

EditableProfileCardLoadingDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(
        {
            profile: {
                isLoading: true,
            },
        },
        { profile: profileReducer },
    ),
];

export const EditableProfileCardError: Story = {
    args: {},
};

EditableProfileCardError.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator(
        {
            profile: {
                error: 'Error',
            },
        },
        { profile: profileReducer },
    ),
];

export const EditableProfileCardErrorDark: Story = {
    args: {},
};

EditableProfileCardErrorDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(
        {
            profile: {
                error: 'Error',
            },
        },
        { profile: profileReducer },
    ),
];

export const EditableProfileCardValidation: Story = {
    args: {},
};

EditableProfileCardValidation.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator(
        {
            profile: {
                validateProfileError: [ValidateProfileError.SERVER_ERROR],
            },
        },
        { profile: profileReducer },
    ),
];

export const EditableProfileCardValidationDark: Story = {
    args: {},
};

EditableProfileCardValidationDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(
        {
            profile: {
                validateProfileError: [ValidateProfileError.SERVER_ERROR],
            },
        },
        { profile: profileReducer },
    ),
];
