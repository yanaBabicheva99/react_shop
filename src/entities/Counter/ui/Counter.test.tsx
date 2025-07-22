import { screen } from '@testing-library/react';
import ComponentRender from 'shared/lib/test/ComponentRender/ComponentRender';
import { StateSchema } from 'app/providers/StoreProvider';
import { userEvent } from '@storybook/test';
import { Counter } from './Counter';

describe('Counter', () => {
    it('Test render', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        ComponentRender(<Counter />, { initialState: state });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    it('Test increment', async () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        ComponentRender(<Counter />, { initialState: state });
        await userEvent.click(screen.getByTestId('increment-button'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    it('Test decrement', async () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        ComponentRender(<Counter />, { initialState: state });
        await userEvent.click(screen.getByTestId('decrement-button'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
