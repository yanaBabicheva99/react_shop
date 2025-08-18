import { classNames } from 'shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
import {
    fetchArticleList,
    fetchArticleNextPage,
    getArticleView,
    ArticleViewSwitcher, ArticleInfinityList, getArticleInfinityListLoading, articleInfinityListAction,
} from 'features/ArticleInfinityList';
import { Page } from 'widgets/Page/Page';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ArticlesSort } from 'features/ArticlesSort';
import { ArticleView } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const {
        className,
    } = props;

    // const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleInfinityListLoading);
    const articleView = useSelector(getArticleView);

    const onLoadNextPage = useCallback(() => {
        if (__Project__ !== 'storybook') {
            dispatch(fetchArticleNextPage());
        }
    }, [dispatch]);

    const handleChangeArticleView = useCallback((newView: ArticleView) => {
        dispatch(articleInfinityListAction.setArticleView(newView));
    }, [dispatch]);

    const fetchData = useCallback(() => {
        dispatch(articleInfinityListAction.setPage(1));
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);

    return (
        <Page
            onScrollEnd={!isLoading ? onLoadNextPage : undefined}
            className={classNames('', {}, [className])}
        >
            <ArticleViewSwitcher view={articleView} onChangeView={handleChangeArticleView} className={cls.switcher} />
            <ArticlesSort fetchData={fetchData} />
            <ArticleInfinityList />
        </Page>
    );
});

export default ArticlesPage;
