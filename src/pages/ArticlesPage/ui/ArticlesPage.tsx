import { classNames } from 'shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
import { ArticleList, fetchArticleNextPage, getArticleListLoadingNextPage } from 'features/ArticleList';
import { Page } from 'widgets/Page/Page';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const {
        className,
    } = props;

    // const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoadingNext = useSelector(getArticleListLoadingNextPage);

    const onLoadNextPage = useCallback(() => {
        if (__Project__ !== 'storybook') {
            dispatch(fetchArticleNextPage());
        }
    }, [dispatch]);

    return (
        <Page
            onScrollEnd={!isLoadingNext ? onLoadNextPage : undefined}
            className={classNames('', {}, [className])}
        >
            <ArticleList />
        </Page>
    );
});

export default ArticlesPage;
