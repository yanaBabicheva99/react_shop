import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    articleCommentList,
    articleCommentListReducer,
    fetchCommentsByArticleId,
    getIsLoadingCommentList,
} from 'features/ArticleCommentList';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useFetchData } from 'shared/lib/hooks/useFetchData/useFetchData';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducerList: ReducersList = {
    articleCommentList: articleCommentListReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const commentsList = useSelector(articleCommentList.selectAll);
    const isLoading = useSelector(getIsLoadingCommentList);
    const { t } = useTranslation();

    useFetchData(() => {
        if (id) {
            dispatch(fetchCommentsByArticleId(id));
        }
    });

    if (!id) {
        return <Text text={t('Статья не найдена')} theme={TextTheme.ERROR} />;
    }

    return (
        <DynamicModuleLoader reducers={reducerList} removeAfterMount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text title={t('Комментарии')} className={cls.comments} />
                <CommentList
                    comments={commentsList}
                    isLoading={isLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
