import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = (props: SideBarProps) => {
    const {
        className,
    } = props;

    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}>
            <Button onClick={handleToggle}>Collapse</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.langBtn} />
            </div>
        </div>
    );
};
