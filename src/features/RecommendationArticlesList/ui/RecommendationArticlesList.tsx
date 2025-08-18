import { classNames } from 'shared/lib/classNames/classNames';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useDispatch, useSelector } from 'react-redux';
import { ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchRecommendationArticleList,
} from '../model/services/FetchRecommendationArticlesList/FetchRecommendationArticleList';
import {
    recommendationArticleList,
    recommendationArticlesListReducer,
} from '../model/slice/RecommendationArticlesListSlice';
import cls from './RecommendationArticlesList.module.scss';

interface RecommendationArticlesListProps {
    className?: string;
}

const reducer = {
    recommendationArticlesList: recommendationArticlesListReducer,
};

export const RecommendationArticlesList = (props: RecommendationArticlesListProps) => {
    const {
        className,
    } = props;

    const dispatch = useDispatch();
    const articles = useSelector(recommendationArticleList.selectAll);

    useInitialEffect(() => {
        dispatch(fetchRecommendationArticleList());
    });

    return (
        <DynamicModuleLoader reducers={reducer}>
            <div className={classNames(cls.RecommendationArticlesList, {}, [className])}>
                <ArticleList
                    articles={articles}
                    articleView={ArticleView.SMALL}
                    className={cls.articlesList}
                    target="_blank"
                />
            </div>
        </DynamicModuleLoader>
    );
};
