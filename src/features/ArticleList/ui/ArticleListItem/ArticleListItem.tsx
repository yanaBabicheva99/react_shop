import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/eye.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { memo, useCallback, useMemo } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { routesPath } from 'shared/config/routerConfig/routerConfig';
import {
    ArticleBlockText, Article, ArticleBlockTextType, ArticleBlockType,
} from 'entities/Article';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/articleView';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view = ArticleView.SMALL,
    } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(`${routesPath.article_details}/${article.id}`);
    }, [article.id, navigate]);

    const blockText = useMemo(() => article.blocks?.find(
        (block) => block.type === ArticleBlockType.TEXT,
    ), [article.blocks]) as ArticleBlockTextType;

    const views = (
        <div className={cls.view}>
            <Text text={String(article.views)} />
            <Icon Icon={EyeIcon} className={cls.eye} />
        </div>
    );

    if (view === ArticleView.SMALL) {
        return (
            <Card
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
                onClick={onOpenArticle}
            >
                <div className={cls.header}>
                    <Text text={article.createdAt} className={cls.created} />
                    <img src={article.img} alt={article.title} />
                </div>
                <div className={cls.footer}>
                    <div className={cls.textHeader}>
                        <Text text={article.type.join(', ')} className={cls.text} />
                        {views}
                    </div>
                    <Text text={article.title} className={cls.text} />
                </div>
            </Card>
        );
    }

    return (
        <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <div className={cls.header}>
                <Text text={article.createdAt} className={cls.created} />
                <div className={cls.avatar}>
                    {article.user.avatar && (
                        <Avatar size={30} url={article.user.avatar} alt={article.user.username} />
                    )}
                    <Text text={article.user.username} className={cls.avatarText} />
                </div>
                <Text title={article.title} className={cls.title} />
                <Text text={article.type.join(', ')} className={cls.text} />
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} />
                </div>
            </div>
            {blockText && (
                <ArticleBlockText
                    block={blockText}
                    className={classNames(cls.blockText, {}, [cls.ellipse])}
                />
            )}
            <div className={cls.footer}>
                <Button onClick={onOpenArticle} theme={ThemeButton.OUTLINE}>
                    {t('Читать далее...')}
                </Button>
                {views}
            </div>
        </Card>
    );
});
