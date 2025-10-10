import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Country } from '../../model/types/Country';
import { SelectCountry } from './SelectCountry';
import { Theme } from '@/shared/const/theme';

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
        direction: 'bottom right',
    },
};

SelectCountryLite.decorators = ThemeDecorator(Theme.LIGHT);

export const SelectCountryDark: Story = {
    args: {
        value: Country.Russia,
        direction: 'bottom right',
    },
};

SelectCountryDark.decorators = ThemeDecorator(Theme.DARK);
