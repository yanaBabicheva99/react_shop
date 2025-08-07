import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { initedArticleList } from '../../model/services/InitedArticleList/InitedArticleList';
import { ArticleView } from '../../model/types/articleView';
import { articleList, articleListAction, articleListReducer } from '../../model/slice/ArticleListSlice';
import { ArticleListSkeleton } from '../ArticleListItem/ArticleListSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { getArticleListLoading, getArticleView } from '../../model/selectors/articleListSelector';
import { ArticleViewSwitcher } from '../ArticleViewSwitcher/ArticleViewSwitcher';

interface ArticleListProps {
    className?: string;
}

const reducer: ReducersList = {
    articleList: articleListReducer,
};

const getSkeleton = (view: ArticleView) => (
    new Array(view === ArticleView.BIG ? 4 : 9).fill(0).map((_, ind) => (
        <ArticleListSkeleton view={view} key={ind} />
    ))
);

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const articles = useSelector(articleList.selectAll);
    const articleView = useSelector(getArticleView);
    const isLoading = useSelector(getArticleListLoading);

    // const { t } = useTranslation();

    useInitialEffect(() => {
        dispatch(initedArticleList());
    });

    const handleChangeArticleView = useCallback((newView: ArticleView) => {
        dispatch(articleListAction.setArticleView(newView));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterMount={false}>
            <div className={classNames(cls.ArticleList, {}, [className])}>
                <ArticleViewSwitcher view={articleView} onChangeView={handleChangeArticleView} />
                {articles.map((article) => (
                    <ArticleListItem key={article.id} view={articleView} article={article} />
                ))}
                {isLoading && getSkeleton(articleView)}
            </div>
        </DynamicModuleLoader>
    );
});
