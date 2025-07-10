import { classNames } from 'shared/lib/classNames/classNames';
import { NavLink } from 'shared/ui/NavLink/NavLink';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './SideBarItem.module.scss';
import { SideBarItemType } from '../../model/items';

interface SideBarItemProps {
   item: SideBarItemType;
    collapsed: boolean;
}

export const SideBarItem = memo((props: SideBarItemProps) => {
    const {
        item,
        collapsed,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames('', { [cls.collapsed]: collapsed })}>
            <NavLink
                to={item.to}
                className={classNames(cls.link)}
            >
                <item.Icon className={cls.icon} />
                <span>{t(item.text)}</span>
            </NavLink>
        </div>
    );
});
