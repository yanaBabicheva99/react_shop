import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, SizeButton, ThemeButton } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { getSidebarItem } from '../../model/selectors/getSidebarItem';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo((props: SideBarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);
    const sideBarItems = useSelector(getSidebarItem);
    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside data-testid="sidebar" className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
            <VStack role="navigation" className={cls.links} gap="16">
                {sideBarItems.map((item) => (
                    <SideBarItem key={item.to} item={item} collapsed={collapsed} />
                ))}
            </VStack>
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
            <HStack className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher collapsed={collapsed} className={cls.langBtn} />
            </HStack>
        </aside>
    );
});
