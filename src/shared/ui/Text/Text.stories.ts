import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const TextPrimaryLite: Story = {
    args: {
        title: 'title',
        text: 'Some text',
    },
};

TextPrimaryLite.decorators = ThemeDecorator(Theme.LIGHT);

export const TextPrimaryDark: Story = {
    args: {
        title: 'title',
        text: 'Some text',
    },
};

TextPrimaryDark.decorators = ThemeDecorator(Theme.DARK);

export const TextErrorLite: Story = {
    args: {
        title: 'title',
        text: 'Some text',
        theme: TextTheme.ERROR,
    },
};

TextErrorLite.decorators = ThemeDecorator(Theme.LIGHT);

export const TextErrorDark: Story = {
    args: {
        title: 'title',
        text: 'Some text',
        theme: TextTheme.ERROR,
    },
};

TextErrorDark.decorators = ThemeDecorator(Theme.DARK);

export const SizeS: Story = {
    args: {
        size: TextSize.S,
        title: 'title',
        text: 'Some text',
        theme: TextTheme.ERROR,
    },
};

SizeS.decorators = ThemeDecorator(Theme.LIGHT);

export const SizeM: Story = {
    args: {
        size: TextSize.M,
        title: 'title',
        text: 'Some text',
        theme: TextTheme.ERROR,
    },
};

SizeM.decorators = ThemeDecorator(Theme.LIGHT);

export const SizeL: Story = {
    args: {
        size: TextSize.L,
        title: 'title',
        text: 'Some text',
        theme: TextTheme.ERROR,
    },
};

SizeL.decorators = ThemeDecorator(Theme.LIGHT);
