import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, Suspense, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { AddCommentForm } from '@/entities/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { Loader } from '@/shared/ui/Loader';
import { fetchCommentsByArticleId } from '../model/servicices/FetchCommentsByArticleId/FetchCommentsByArticleId';
import {
    addNewCommentArticle,
} from '../model/servicices/AddNewCommentArticle/AddNewCommentArticle';
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
            <VStack data-testid="ArticleComment" max gap="16" className={classNames('', {}, [className])}>
                <Text title={t('Комментарии')} />
                <Suspense fallback={<Loader />}>
                    <AddCommentForm onSendComment={handleSendComment} />
                </Suspense>
                <CommentList
                    comments={commentsList}
                    isLoading={isLoading}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
