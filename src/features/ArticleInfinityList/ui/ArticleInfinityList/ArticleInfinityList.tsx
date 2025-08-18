import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleList } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { articleInfinityListReducer, articleInfinityList } from '../../model/slice/ArticleInfinityListSlice';
import { getArticleView, getArticleInfinityListLoading } from '../../model/selectors/articleListSelector';
import { initedArticleList } from '../../model/services/InitedArticleList/InitedArticleList';

const reducer: ReducersList = {
    articleInfinityList: articleInfinityListReducer,
};

export const ArticleInfinityList = () => {
    const dispatch = useAppDispatch();
    const articles = useSelector(articleInfinityList.selectAll);
    const articleView = useSelector(getArticleView);
    const isLoading = useSelector(getArticleInfinityListLoading);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initedArticleList({ searchParams }));
    });

    console.log(articles);

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterMount={false}>
            <ArticleList
                articles={articles}
                articleView={articleView}
                isLoading={isLoading}
            />
        </DynamicModuleLoader>
    );
};
