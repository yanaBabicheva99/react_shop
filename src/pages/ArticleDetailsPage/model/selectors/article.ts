import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getArticle } from '@/entities/Article';

export const canArticleEdit = createSelector(
    getUserAuthData,
    getArticle,
    (user, article) => {
        if (!user || !article) {
            return false;
        }
        return user.id === article.user.id;
    },
);
