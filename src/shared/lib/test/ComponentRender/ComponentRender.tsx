import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import i18n from '../../../config/i18n/i18nTesting';

interface RenderOptions {
    initialPath?: string
}

const ComponentRender = (component: ReactNode, renderOptions: RenderOptions = {}) => {
    const { initialPath = '/' } = renderOptions;
    return render(
        <MemoryRouter initialEntries={[initialPath]}>
            <I18nextProvider i18n={i18n}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
};

export default ComponentRender;
