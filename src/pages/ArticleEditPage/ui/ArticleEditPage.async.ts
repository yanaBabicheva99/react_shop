import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((res) => setTimeout(() => {
    // @ts-ignore
    res(import('./ArticleEditPage'));
}, 1000)));
