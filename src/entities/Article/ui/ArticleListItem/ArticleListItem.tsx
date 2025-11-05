import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/eye.svg';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { NavLink } from '@/shared/ui/NavLink';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';
import { Article, ArticleBlockText as ArticleBlockTextType } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleBlockText } from '../ArticleBlockComponent/ArticleBlockText/ArticleBlockText';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
    target?: string;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view = ArticleView.SMALL, target } = props;

    const { t } = useTranslation();

    const blockText = useMemo(
        () => article.blocks?.find((block) => block.type === ArticleBlockType.TEXT),
        [article.blocks],
    ) as ArticleBlockTextType;

    const views = (
        <div className={cls.view}>
            <Text text={String(article.views)} />
            <Icon Icon={EyeIcon} className={cls.eye} />
        </div>
    );

    if (view === ArticleView.SMALL) {
        return (
            <NavLink to={getRouteArticleDetails(article.id)} target={target}>
                <Card
                    data-testid="ArticleListItem"
                    className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
                >
                    <div className={cls.header}>
                        <Text text={article.createdAt} className={cls.created} />
                        <AppImage
                            src={article.img}
                            alt={article.title}
                            fallback={<Skeleton height={150} width={168} />}
                        />
                    </div>
                    <div className={cls.footer}>
                        <div className={cls.textHeader}>
                            <Text text={article.type.join(', ')} className={cls.text} />
                            {views}
                        </div>
                        <Text text={article.title} className={cls.text} />
                    </div>
                </Card>
            </NavLink>
        );
    }

    return (
        <Card data-testid="ArticleListItem" className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <div className={cls.header}>
                <Text text={article.createdAt} className={cls.created} />
                <div className={cls.avatar}>
                    {article.user.avatar && <Avatar size={30} url={article.user.avatar} alt={article.user.username} />}
                    <Text text={article.user.username} className={cls.avatarText} />
                </div>
                <Text title={article.title} className={cls.title} />
                <Text text={article.type.join(', ')} className={cls.text} />
                <div className={cls.imageWrapper}>
                    <AppImage src={article.img} alt={article.title} fallback={<Skeleton height={178} width="100%" />} />
                </div>
            </div>
            {blockText && (
                <ArticleBlockText block={blockText} className={classNames(cls.blockText, {}, [cls.ellipse])} />
            )}
            <div className={cls.footer}>
                <NavLink to={getRouteArticleDetails(article.id)} target={target}>
                    <Button theme={ThemeButton.OUTLINE}>{t('Читать далее...')}</Button>
                </NavLink>
                {views}
            </div>
        </Card>
    );
});
