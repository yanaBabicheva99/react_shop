import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    NOT_FOUND = 'not_found'
}

export const routesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles',
    [AppRoutes.NOT_FOUND]: '*',
};

export interface AppRouteProps extends RouteProps {
    authOnly?: boolean;
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
    [AppRoutes.ARTICLES]: {
        path: routesPath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${routesPath.article_details}/:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: routesPath.not_found,
        element: <NotFound />,
    },
};
