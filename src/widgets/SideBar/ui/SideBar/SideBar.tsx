import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import React, { useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'shared/ui/NavLink/NavLink';
import { routesPath } from 'shared/config/routerConfig/routerConfig';
import MainPageIcon from 'shared/assets/main-20-20.svg';
import AboutPageIcon from 'shared/assets/about-20-20.svg';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = (props: SideBarProps) => {
    const {
        className,
    } = props;

    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.links}>
                <NavLink
                    to={routesPath.main}
                    className={cls.link}
                >
                    <MainPageIcon className={cls.icon} />
                    <span>{t('Главная')}</span>
                </NavLink>
                <NavLink
                    to={routesPath.about}
                    className={cls.link}
                >
                    <AboutPageIcon className={cls.icon} />
                    <span>{t('О нас')}</span>
                </NavLink>
            </div>
            <Button
                data-testid="toggle-btn"
                onClick={handleToggle}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={SizeButton.L}
                className={cls.toggleBtn}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    collapsed={collapsed}
                    className={cls.langBtn}
                />
            </div>
        </div>
    );
};
