import React from 'react';
import { routesPath } from 'shared/config/routerConfig/routerConfig';
import MainPageIcon from 'shared/assets/main-20-20.svg';
import AboutPageIcon from 'shared/assets/about-20-20.svg';
import ProfilePageIcon from 'shared/assets/profile.svg';

export interface SideBarItemType {
    to: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    text: string;
}

export const sideBarItems: SideBarItemType[] = [
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
    {
        to: routesPath.profile,
        Icon: ProfilePageIcon,
        text: 'Профиль',
    },
];
