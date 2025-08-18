import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, useCallback } from 'react';
import { ArticleType } from 'entities/Article';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
    content: ReactNode;
    value: ArticleType;
}
interface TabsProps<T> {
    className?: string;
    tabs: TabItem[];
    value: T;
    onChange: (type: T) => void;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        value,
        onChange,
    } = props;

    const handleChangeTab = useCallback((tab: TabItem) => () => {
        onChange(tab.value as T);
    }, [onChange]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINE}
                    onClick={handleChangeTab(tab)}
                    className={cls.tab}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
