import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import React, { memo, useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { sideBarItems } from '../../model/items';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
    const {
        className,
    } = props;

    const [collapsed, setCollapsed] = useState(false);
    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.links}>
                {sideBarItems.map((item) => (
                    <SideBarItem key={item.to} item={item} collapsed={collapsed} />
                ))}
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
});
