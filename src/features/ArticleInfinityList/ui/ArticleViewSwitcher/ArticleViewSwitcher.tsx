import React, { memo, SVGProps, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ViewListIcon from '@/shared/assets/list.svg';
import ViewTiledIcon from '@/shared/assets/tiled.svg';
import { Icon } from '@/shared/ui/Icon';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { ArticleView } from '@/entities/Article';
import cls from './ArticleViewSwitcher.module.scss';

interface ArticleViewSwitcherProps {
    className?: string;
    view?: ArticleView;
    onChangeView: (newView: ArticleView) => void;
}

interface ArticleViewItem {
    Icon: React.VFC<SVGProps<SVGSVGElement>>;
    view: ArticleView;
}

const articleViewItem: ArticleViewItem[] = [
    {
        Icon: ViewTiledIcon,
        view: ArticleView.SMALL,
    },
    {
        Icon: ViewListIcon,
        view: ArticleView.BIG,
    },
];

export const ArticleViewSwitcher = memo((props: ArticleViewSwitcherProps) => {
    const {
        className,
        view = ArticleView.SMALL,
        onChangeView,
    } = props;

    const onClickView = useCallback((view: ArticleView) => () => {
        onChangeView(view);
    }, [onChangeView]);

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.buttonWrapper}>
                {articleViewItem.map((item) => (
                    <Button
                        theme={ThemeButton.CLEAR}
                        key={item.view}
                        onClick={onClickView(item.view)}
                        className={classNames('', { [cls.selected]: item.view === view })}
                    >
                        <Icon Icon={item.Icon} />
                    </Button>
                ))}
            </div>
        </div>
    );
});
