import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Button, SizeButton, ThemeButton } from './Button';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

Clear.decorators = ThemeDecorator(Theme.LIGHT);

export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

ClearDark.decorators = ThemeDecorator(Theme.DARK);

export const ClearSizeM: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
        size: SizeButton.M,
    },
};

ClearSizeM.decorators = ThemeDecorator(Theme.LIGHT);

export const ClearSizeMDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
        size: SizeButton.M,
    },
};

ClearSizeMDark.decorators = ThemeDecorator(Theme.DARK);

export const ClearSizeL: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
        size: SizeButton.L,
    },
};

ClearSizeL.decorators = ThemeDecorator(Theme.LIGHT);

export const ClearSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
        size: SizeButton.XL,
    },
};

ClearSizeXL.decorators = ThemeDecorator(Theme.LIGHT);

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};

Outline.decorators = ThemeDecorator(Theme.LIGHT);

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};

OutlineDark.decorators = ThemeDecorator(Theme.DARK);

export const DisabledOutline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        disabled: true,
    },
};

DisabledOutline.decorators = ThemeDecorator(Theme.LIGHT);

export const DisabledOutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        disabled: true,
    },
};

DisabledOutlineDark.decorators = ThemeDecorator(Theme.DARK);

export const BackgroundLite: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND,
    },
};

BackgroundLite.decorators = ThemeDecorator(Theme.LIGHT);

export const BackgroundDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND,
    },
};

BackgroundDark.decorators = ThemeDecorator(Theme.DARK);

export const BackgroundInvertedLite: Story = {
    args: {
        children: '<',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: SizeButton.XL,
    },
};

BackgroundInvertedLite.decorators = ThemeDecorator(Theme.LIGHT);

export const BackgroundInvertedDark: Story = {
    args: {
        children: '<',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: SizeButton.L,
    },
};

BackgroundInvertedDark.decorators = ThemeDecorator(Theme.DARK);
