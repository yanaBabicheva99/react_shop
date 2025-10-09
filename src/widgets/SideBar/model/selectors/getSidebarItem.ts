import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainPageIcon from '@/shared/assets/main-20-20.svg';
import AboutPageIcon from '@/shared/assets/about-20-20.svg';
import ProfilePageIcon from '@/shared/assets/profile.svg';
import ArticlesPageIcon from '@/shared/assets/articles.svg';
import { SideBarItemType } from '../types/sidebarItem';
import { routesPath } from '@/shared/const/router';

export const getSidebarItem = createSelector(getUserAuthData, (authData) => {
    const sideBarItems: SideBarItemType[] = [
        {
            to: routesPath.main,
            Icon: MainPageIcon,
            text: 'Главная',
        },
        {
            to: routesPath.about,
            Icon: AboutPageIcon,
            text: 'О нас',
        },
    ];

    if (authData) {
        sideBarItems.push(
            {
                to: `${routesPath.profile}/${authData.id}`,
                Icon: ProfilePageIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                to: routesPath.articles,
                Icon: ArticlesPageIcon,
                text: 'Статьи',
                authOnly: true,
            },
        );
    }
    return sideBarItems;
});
