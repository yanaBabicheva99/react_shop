import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import ViewIcon from '@/shared/assets/eye.svg';
import CalendarIcon from '@/shared/assets/calendar.svg';
import { Avatar } from '@/shared/ui/Avatar';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleBlockText } from '../ArticleBlockComponent/ArticleBlockText/ArticleBlockText';
import { ArticleBlockImage } from '../ArticleBlockComponent/ArticleBlockImage/ArticleBlockImage';
import { ArticleBlockCode } from '../ArticleBlockComponent/ArticleBlockCode/ArticleBlockCode';
import { getArticle, getArticleError, getArticleIsLoading } from '../../model/selectors/articleDetails';
import { fetchArticleDetails } from '../../model/services/FetchArticleDetails/FetchArticleDetails';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';

interface ArticleDetailProps {
    className?: string;
    id: string;
}

const reducer: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailProps) => {
    const { id, className } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articleDetails = useSelector(getArticle);
    const isLoading = useSelector(getArticleIsLoading);
    const error = useSelector(getArticleError);

    const renderArticleBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.TEXT:
                return <ArticleBlockText key={block.id} block={block} className={cls.blockItem} />;

            case ArticleBlockType.IMAGE:
                return <ArticleBlockImage key={block.id} block={block} className={cls.blockItem} />;

            case ArticleBlockType.CODE:
                return <ArticleBlockCode key={block.id} block={block} className={cls.blockItem} />;

            default:
                return null;
        }
    }, []);

    let content;

    useInitialEffect(() => {
        dispatch(fetchArticleDetails(id));
    });

    if (isLoading) {
        content = (
            <VStack max>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </VStack>
        );
    } else if (error) {
        content = <Text theme={TextTheme.ERROR} text={t('Произошла ошибка при загрузке статьи')} />;
    } else {
        content = (
            <div className={className}>
                {articleDetails?.img && (
                    <HStack max justify="center" className={cls.avatarWrapper}>
                        <Avatar url={articleDetails.img} alt="img" />
                    </HStack>
                )}
                <Text data-testid="ArticleTitle" title={articleDetails?.title} size={TextSize.L} />
                <Text title={articleDetails?.subtitle} className={cls.subtext} />
                <VStack gap="8">
                    <HStack data-testid="ArticleInfo" className={cls.articleInfo}>
                        <Icon Icon={ViewIcon} />
                        <Text text={String(articleDetails?.views)} />
                    </HStack>
                    <HStack className={cls.articleInfo}>
                        <Icon Icon={CalendarIcon} />
                        <Text text={String(articleDetails?.createdAt)} />
                    </HStack>
                </VStack>
                <div className={cls.block}>{articleDetails?.blocks?.map(renderArticleBlock)}</div>
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterMount>
            {content}
        </DynamicModuleLoader>
    );
});
