import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18n from '../../../config/i18n/i18nTesting';

interface RenderOptions {
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    route?: string;
}

const ComponentRender = (component: ReactNode, renderOptions: RenderOptions = {}) => {
    const { route = '/', initialState, asyncReducers } = renderOptions;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
                <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
};

export default ComponentRender;
