import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import {
    ArticleCommentList,
} from '@/features/ArticleCommentList';
import { Page } from '@/widgets/Page/Page';
import { RecommendationArticlesList } from '@/features/RecommendationArticlesList';
import { VStack } from '@/shared/ui/Stack';
import { ArticleDetailsPageHeader } from '../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleRatingCard } from '@/features/ArticleRating';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation();

    if (!id) {
        return <Text text={t('Статья не найдена')} theme={TextTheme.ERROR} />;
    }

    return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <VStack max gap="16">
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleCommentList id={id} />
                <ArticleRatingCard id={id} />
                <RecommendationArticlesList />
            </VStack>
        </Page>
    );
};

export default ArticleDetailsPage;
