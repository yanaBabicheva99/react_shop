import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from '@/shared/ui/NavLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import cls from './SideBarItem.module.scss';
import { SideBarItemType } from '../../model/types/sidebarItem';

interface SideBarItemProps {
    item: SideBarItemType;
    collapsed: boolean;
}

export const SideBarItem = memo((props: SideBarItemProps) => {
    const { item, collapsed } = props;

    const { t } = useTranslation();
    const auth = useSelector(getUserAuthData);

    if (!auth && item.authOnly) {
        return null;
    }

    return (
        <NavLink to={item.to} className={classNames(cls.link, { [cls.collapsed]: collapsed })}>
            <item.Icon className={cls.icon} />
            <span>{t(item.text)}</span>
        </NavLink>
    );
});
