import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { Text, TextTheme } from '@/shared/ui/Text';
import { ArticleCommentList } from '@/features/ArticleCommentList';
import { Page } from '@/widgets/Page';
import { RecommendationArticlesList } from '@/features/RecommendationArticlesList';
import { VStack } from '@/shared/ui/Stack';
import { ArticleDetailsPageHeader } from '../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleRatingCard } from '@/features/ArticleRating';
import { getFeatureFlag, toggleFeatures } from '@/shared/lib/features';
import { Counter } from '@/entities/Counter';
import { Card } from '@/shared/ui/Card';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();
    const isCounter = getFeatureFlag('CounterEnabled');

    if (!id) {
        return <Text text={t('Статья не найдена')} theme={TextTheme.ERROR} />;
    }

    const ArticleRating = toggleFeatures({
        name: 'ArticleRatingEnabled',
        on: () => <ArticleRatingCard id={id} />,
        off: () => <Card>{t('Оценка статьи')}</Card>,
    });

    return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <VStack max gap="16">
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleCommentList id={id} />
                {ArticleRating}
                {isCounter && <Counter />}
                <RecommendationArticlesList />
            </VStack>
        </Page>
    );
};

export default ArticleDetailsPage;
