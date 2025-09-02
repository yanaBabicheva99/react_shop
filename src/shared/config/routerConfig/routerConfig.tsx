import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { UserRole } from 'entities/User/model/types/User';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import { ForbiddenPage } from 'pages/ForbiddenPage';

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ADMIN_PANEL = 'admin_panel',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found'
}

export const routesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles',
    [AppRoutes.ARTICLE_CREATE]: '/article/new',
    [AppRoutes.ARTICLE_EDIT]: '/article/:id/edit',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    [AppRoutes.NOT_FOUND]: '*',
};

export interface AppRouteProps extends RouteProps {
    authOnly?: boolean;
    roles?: UserRole[];
}

export const routerConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: routesPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: routesPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${routesPath.profile}/:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: routesPath.admin_panel,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.ARTICLES]: {
        path: routesPath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: routesPath.article_create,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: routesPath.article_edit,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${routesPath.article_details}/:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.FORBIDDEN]: {
        path: routesPath.forbidden,
        element: <ForbiddenPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: routesPath.not_found,
        element: <NotFound />,
    },
};
