import { screen } from '@testing-library/react';
import componentRender from '@/shared/lib/test/ComponentRender/ComponentRender';
import AppRouter from './AppRouter';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { UserRole } from '@/shared/const/userConsts';

describe('App Router test', () => {
    test('About page test render', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });
        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Render page without auth', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: { authData: undefined },
            },
        });
        const mainPage = await screen.findByTestId('MainPage');
        expect(mainPage).toBeInTheDocument();
    });

    test('Render page with auth', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: { authData: {} },
            },
        });
        const profilePage = await screen.findByTestId('ProfilePage');
        expect(profilePage).toBeInTheDocument();
    });

    test('Test page forbidden', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    authData: {
                        roles: [UserRole.USER],
                    },
                },
            },
        });
        const forbiddenPage = await screen.findByTestId('ForbiddenPage');
        expect(forbiddenPage).toBeInTheDocument();
    });

    test('Test render admin page', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    authData: {
                        roles: [UserRole.ADMIN],
                    },
                },
            },
        });
        const adminPage = await screen.findByTestId('AdminPage');
        expect(adminPage).toBeInTheDocument();
    });

    test('Test render not found page', async () => {
        componentRender(<AppRouter />, {
            route: '/bjkhjk',
            initialState: {
                user: {
                    authData: {
                        roles: [UserRole.ADMIN],
                    },
                },
            },
        });
        const notFoundPage = await screen.findByTestId('NotFoundPage');
        expect(notFoundPage).toBeInTheDocument();
    });
});
