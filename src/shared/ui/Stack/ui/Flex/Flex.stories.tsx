import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Flex } from './Flex';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const RowFlex: Story = {
    args: {
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
    },
};

RowFlex.decorators = ThemeDecorator(Theme.LIGHT);

export const RowFlexDark: Story = {
    args: {
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
    },
};

RowFlexDark.decorators = ThemeDecorator(Theme.DARK);

export const RowFlexOrange: Story = {
    args: {
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
    },
};

RowFlexOrange.decorators = ThemeDecorator(Theme.ORANGE);

export const RowFlexBetween: Story = {
    args: {
        justify: 'between',
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
    },
};

RowFlexBetween.decorators = ThemeDecorator(Theme.LIGHT);

export const RowFlexEnd: Story = {
    args: {
        justify: 'end',
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
    },
};

RowFlexEnd.decorators = ThemeDecorator(Theme.LIGHT);

export const RowFlexCenter: Story = {
    args: {
        justify: 'center',
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
    },
};

RowFlexCenter.decorators = ThemeDecorator(Theme.LIGHT);

export const ColumnFlex: Story = {
    args: {
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
        direction: 'column',
    },
};

ColumnFlex.decorators = ThemeDecorator(Theme.LIGHT);

export const ColumnFlexDark: Story = {
    args: {
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
        direction: 'column',
    },
};

ColumnFlexDark.decorators = ThemeDecorator(Theme.DARK);

export const ColumnFlexOrange: Story = {
    args: {
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
        direction: 'column',
    },
};

ColumnFlexOrange.decorators = ThemeDecorator(Theme.ORANGE);

export const RowGap4: Story = {
    args: {
        gap: '4',
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
    },
};

RowGap4.decorators = ThemeDecorator(Theme.LIGHT);

export const RowGap8: Story = {
    args: {
        gap: '8',
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
    },
};

RowGap8.decorators = ThemeDecorator(Theme.LIGHT);

export const RowGap16: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
    },
};

RowGap16.decorators = ThemeDecorator(Theme.LIGHT);

export const RowGap32: Story = {
    args: {
        gap: '32',
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
    },
};

RowGap32.decorators = ThemeDecorator(Theme.LIGHT);

export const ColumnGap4: Story = {
    args: {
        gap: '4',
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
        direction: 'column',
    },
};

ColumnGap4.decorators = ThemeDecorator(Theme.LIGHT);

export const ColumnGap8: Story = {
    args: {
        gap: '8',
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
        direction: 'column',
    },
};

ColumnGap8.decorators = ThemeDecorator(Theme.LIGHT);

export const ColumnGap16: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
        direction: 'column',
    },
};

ColumnGap16.decorators = ThemeDecorator(Theme.LIGHT);

export const ColumnGap32: Story = {
    args: {
        gap: '32',
        children: (
            <>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
            </>
        ),
        direction: 'column',
    },
};

ColumnGap32.decorators = ThemeDecorator(Theme.LIGHT);
