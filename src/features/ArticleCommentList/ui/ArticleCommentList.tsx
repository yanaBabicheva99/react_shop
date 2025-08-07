import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../model/servicices/FetchCommentsByArticleId/FetchCommentsByArticleId';
import {
    addNewCommentArticle,
} from '../model/servicices/AddNewCommentArticle/AddNewCommentArticle';
import cls from './ArticleCommentList.module.scss';
import { articleCommentList, articleCommentListReducer } from '../model/slice/ArticleCommentListSlice';
import { getIsLoadingCommentList } from '../model/selectors/ArticleCommentList';

interface ArticleCommentListProps {
    className?: string;
    id: string;
}

const reducerList: ReducersList = {
    articleCommentList: articleCommentListReducer,
};

export const ArticleCommentList = memo((props: ArticleCommentListProps) => {
    const {
        className,
        id,
    } = props;

    const commentsList = useSelector(articleCommentList.selectAll);
    const isLoading = useSelector(getIsLoadingCommentList);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const handleSendComment = useCallback((text?: string) => {
        if (text) dispatch(addNewCommentArticle({ text, id }));
    }, [dispatch, id]);

    return (
        <DynamicModuleLoader reducers={reducerList} removeAfterMount>
            <div className={classNames(cls.ArticleCommentList, {}, [className])}>
                <Text title={t('Комментарии')} className={cls.comments} />
                <AddCommentForm onSendComment={handleSendComment} />
                <CommentList
                    comments={commentsList}
                    isLoading={isLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
});
