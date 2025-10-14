export enum AppRoutes {
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

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteAdmin = () => '/admin';
export const getRouteArticles = () => '/articles';

export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/article/new';
export const getRouteArticleEdit = (id: string) => `/article/${id}/edit`;
export const getRouteForbidden = () => '/forbidden';
