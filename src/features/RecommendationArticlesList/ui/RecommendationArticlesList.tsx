import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList, ArticleView } from '@/entities/Article';
import { useArticleRecommendationList } from '../api/recommendationArticleListInject';
import cls from './RecommendationArticlesList.module.scss';

interface RecommendationArticlesListProps {
    className?: string;
}

export const RecommendationArticlesList = (props: RecommendationArticlesListProps) => {
    const { className } = props;

    const { isLoading, data: articles } = useArticleRecommendationList(4);

    return (
        <ArticleList
            isLoading={isLoading}
            articles={articles}
            articleView={ArticleView.SMALL}
            className={classNames(cls.RecommendationArticlesList, {}, [className])}
            target="_blank"
        />
    );
};
