import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { routesPath } from 'shared/config/routerConfig/routerConfig';
import { useSelector } from 'react-redux';
import { getArticle } from 'entities/Article';
import { HStack } from 'shared/ui/Stack';
import { canArticleEdit } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const canEdit = useSelector(canArticleEdit);
    const article = useSelector(getArticle);

    const navigate = useNavigate();

    const goBack = useCallback(() => {
        navigate(routesPath.articles);
    }, [navigate]);

    const goEdit = useCallback(() => {
        navigate(`/article/${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <HStack justify="between" max className={classNames('', {}, [className])}>
            <Button
                theme={ThemeButton.OUTLINE}
                onClick={goBack}
            >
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button
                    theme={ThemeButton.OUTLINE}
                    onClick={goEdit}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );
};
