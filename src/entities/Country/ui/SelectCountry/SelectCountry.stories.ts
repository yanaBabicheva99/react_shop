import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { SelectCountry } from './SelectCountry';

const meta: Meta<typeof SelectCountry> = {
    title: 'entities/SelectCountry',
    component: SelectCountry,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SelectCountry>;

export const SelectCountryLite: Story = {
    args: {
        value: Country.Russia,
    },
};

SelectCountryLite.decorators = ThemeDecorator(Theme.LIGHT);

export const SelectCountryDark: Story = {
    args: {
        value: Country.Russia,
    },
};

SelectCountryDark.decorators = ThemeDecorator(Theme.DARK);
