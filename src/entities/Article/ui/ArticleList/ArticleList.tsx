import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListSkeleton } from '../ArticleListItem/ArticleListSkeleton';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles?: Article[];
    articleView: ArticleView;
    isLoading?: boolean;
    target?: string;
}
const getSkeleton = (view: ArticleView) => (
    new Array(view === ArticleView.BIG ? 4 : 9).fill(0).map((_, ind) => (
        <ArticleListSkeleton view={view} key={ind} />
    ))
);

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles = [],
        articleView,
        isLoading,
        target,
    } = props;

    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {articles.map((article) => (
                <ArticleListItem key={article.id} view={articleView} article={article} target={target} />
            ))}
            {isLoading && getSkeleton(articleView)}
        </div>
    );
});
