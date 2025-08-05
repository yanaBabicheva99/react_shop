import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useFetchData } from 'shared/lib/hooks/useFetchData/useFetchData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleView } from '../../model/types/articleView';
import { articleList, articleListAction, articleListReducer } from '../../model/slice/ArticleListSlice';
import { ArticleListSkeleton } from '../ArticleListItem/ArticleListSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { fetchArticleList } from '../../model/services/FetchArticleList/FetchArticleList';
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

    useFetchData(() => {
        dispatch(articleListAction.initState());
        dispatch(fetchArticleList({ page: 1 }));
    });

    const handleChangeArticleView = useCallback((newView: ArticleView) => {
        dispatch(articleListAction.setArticleView(newView));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducer}>
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
