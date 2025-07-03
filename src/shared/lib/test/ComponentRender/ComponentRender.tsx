import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import i18n from '../../../config/i18n/i18nTesting';

interface RenderOptions {
    initialState?: DeepPartial<StateSchema>;
    route?: string;
}

const ComponentRender = (component: ReactNode, renderOptions: RenderOptions = {}) => {
    const { route = '/', initialState } = renderOptions;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
        ,
    );
};

export default ComponentRender;
