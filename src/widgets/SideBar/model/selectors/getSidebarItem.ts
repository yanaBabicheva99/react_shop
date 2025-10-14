import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainPageIcon from '@/shared/assets/main-20-20.svg';
import AboutPageIcon from '@/shared/assets/about-20-20.svg';
import ProfilePageIcon from '@/shared/assets/profile.svg';
import ArticlesPageIcon from '@/shared/assets/articles.svg';
import { SideBarItemType } from '../types/sidebarItem';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItem = createSelector(getUserAuthData, (authData) => {
    const sideBarItems: SideBarItemType[] = [
        {
            to: getRouteMain(),
            Icon: MainPageIcon,
            text: 'Главная',
        },
        {
            to: getRouteAbout(),
            Icon: AboutPageIcon,
            text: 'О нас',
        },
    ];

    if (authData) {
        sideBarItems.push(
            {
                to: getRouteProfile(authData.id),
                Icon: ProfilePageIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                to: getRouteArticles(),
                Icon: ArticlesPageIcon,
                text: 'Статьи',
                authOnly: true,
            },
        );
    }
    return sideBarItems;
});
