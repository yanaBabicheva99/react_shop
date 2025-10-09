import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFound } from '@/pages/NotFound';
import { AppRouteProps } from '@/shared/types/router';
import { AppRoutes, routesPath } from '@/shared/const/router';

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
