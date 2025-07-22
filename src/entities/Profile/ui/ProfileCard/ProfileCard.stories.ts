import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import Img from 'shared/assets/test/storybook/img.png';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const ProfileCardLite: Story = {
    args: {
        readonly: true,
        first: 'Яна',
        lastname: '',
        age: 26,
        avatar: Img,
        city: 'Краснодар',
        country: Country.Russia,
        currency: Currency.RUB,
    },
};

ProfileCardLite.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ProfileCardDark: Story = {
    args: {
        readonly: true,
        first: 'Яна',
        lastname: '',
        age: 26,
        avatar: Img,
        city: 'Краснодар',
        country: Country.Russia,
        currency: Currency.RUB,
    },
};

ProfileCardDark.decorators = [ThemeDecorator(Theme.DARK)];
