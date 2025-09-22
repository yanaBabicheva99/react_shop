import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Profile } from '../../types/profileSchema';
import { getProfileForm } from './getProfileForm';

const data: Profile = {
    id: '1',
    first: 'Маша',
    lastname: 'Наша',
    age: 6,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Краснодар',
};

describe('getProfileForm', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
});
