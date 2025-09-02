import { screen } from '@testing-library/react';
import ComponentRender from 'shared/lib/test/ComponentRender/ComponentRender';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { Country } from 'entities/Country';
import { Profile } from '../../model/types/profileSchema';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    city: 'Краснодар',
    age: 23,
    avatar: '',
    country: Country.Russia,
};

const renderOptions = {
    initialState: {
        profile: {
            data: profile,
            form: profile,
            readonly: true,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('Test EditableProfileCard', () => {
    it('Test change readonly state', async () => {
        ComponentRender(<EditableProfileCard id="1" />, renderOptions);
        await userEvent.click(screen.getByTestId('Button.Edit'));
        expect(screen.getByTestId('Button.Save')).toBeInTheDocument();
        expect(screen.getByTestId('Button.Cancel')).toBeInTheDocument();
    });

    it('Test reset data', async () => {
        ComponentRender(<EditableProfileCard id="1" />, renderOptions);
        await userEvent.click(screen.getByTestId('Button.Edit'));
        await userEvent.clear(screen.getByTestId('Input.firstName'));
        await userEvent.clear(screen.getByTestId('Input.lastName'));
        await userEvent.clear(screen.getByTestId('Input.age'));

        await userEvent.type(screen.getByTestId('Input.firstName'), 'user');
        await userEvent.type(screen.getByTestId('Input.lastName'), 'user');
        await userEvent.type(screen.getByTestId('Input.age'), '26');

        await userEvent.click(screen.getByTestId('Button.Cancel'));
        expect(screen.getByTestId('Input.firstName')).toHaveValue('admin');
        expect(screen.getByTestId('Input.lastName')).toHaveValue('admin');
        expect(screen.getByTestId('Input.age')).toHaveValue('23');
    });

    it('test validation Error', async () => {
        ComponentRender(<EditableProfileCard id="1" />, renderOptions);
        await userEvent.click(screen.getByTestId('Button.Edit'));
        await userEvent.clear(screen.getByTestId('Input.firstName'));
        await userEvent.clear(screen.getByTestId('Input.lastName'));
        await userEvent.click(screen.getByTestId('Button.Save'));
        expect(screen.getByTestId('Paragraph.Error')).toBeInTheDocument();
    });

    it('test success save', async () => {
        const mockPutRequest = jest.spyOn($api, 'put');
        ComponentRender(<EditableProfileCard id="1" />, renderOptions);
        await userEvent.click(screen.getByTestId('Button.Edit'));
        await userEvent.clear(screen.getByTestId('Input.firstName'));
        await userEvent.type(screen.getByTestId('Input.firstName'), 'user');
        await userEvent.click(screen.getByTestId('Button.Save'));
        expect(mockPutRequest).toHaveBeenCalled();
    });
});
