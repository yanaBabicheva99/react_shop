import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import ViewIcon from 'shared/assets/eye.svg';
import CalendarIcon from 'shared/assets/calendar.svg';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { ArticleBlockText } from './ArticleBlockComponent/ArticleBlockText/ArticleBlockText';
import { ArticleBlockImage } from './ArticleBlockComponent/ArticleBlockImage/ArticleBlockImage';
import { ArticleBlockCode } from './ArticleBlockComponent/ArticleBlockCode/ArticleBlockCode';
import { getArticle, getArticleError, getArticleIsLoading } from '../model/selectors/articleDetails';
import { fetchArticleDetails } from '../model/services/FetchArticleDetails/FetchArticleDetails';
import cls from './Article.module.scss';
import { articleDetailsReducer } from '../model/slice/articleDetailsSlice';
import { ArticleBlock, ArticleBlockType } from '../model/types/article';

interface ArticleDetailProps {
    className?: string;
    id: string;
}

const reducer: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const Article = memo((props: ArticleDetailProps) => {
    const {
        id,
        className,
    } = props;

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

        default: return null;
        }
    }, []);

    let content;

    useEffect(() => {
        if (__Project__ !== 'storybook') {
            dispatch(fetchArticleDetails(id));
        }
    }, [dispatch, id]);

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = <Text theme={TextTheme.ERROR} text={t('Произошла ошибка при загрузке статьи')} />;
    } else {
        content = (
            <div>
                {articleDetails?.img && (
                    <div className={cls.avatarWrapper}>
                        <Avatar url={articleDetails.img} alt="img" />
                    </div>
                )}
                <Text title={articleDetails?.title} size={TextSize.L} />
                <Text title={articleDetails?.subtitle} className={cls.subtext} />
                <div className={cls.articleInfo}>
                    <Icon Icon={ViewIcon} />
                    <Text text={String(articleDetails?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Icon={CalendarIcon} />
                    <Text text={String(articleDetails?.createdAt)} />
                </div>
                <div className={cls.block}>
                    {articleDetails?.blocks?.map(renderArticleBlock)}
                </div>
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterMount>
            <div className={classNames(cls.ArticleDetail, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
