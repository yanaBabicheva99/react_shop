import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from '../../model/types/Currency';
import { SelectCurrency } from './SelectCurrency';

const meta: Meta<typeof SelectCurrency> = {
    title: 'entities/SelectCurrency',
    component: SelectCurrency,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SelectCurrency>;

export const SelectCurrencyLite: Story = {
    args: {
        value: Currency.RUB,
        direction: 'bottom right',
    },
};

SelectCurrencyLite.decorators = ThemeDecorator(Theme.LIGHT);

export const SelectCurrencyDark: Story = {
    args: {
        value: Currency.RUB,
        direction: 'bottom right',
    },
};

SelectCurrencyDark.decorators = ThemeDecorator(Theme.DARK);
