import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RatingCard } from '@/entities/Rating';
import { useArticleRecommendationList, usePostArticleRating } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface ArticleRatingCardProps {
    className?: string;
    id: string;
}

export const ArticleRatingCard = (props: ArticleRatingCardProps) => {
    const {
        className,
        id: articleId,
    } = props;

    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);

    const { isLoading, isFetching, data } = useArticleRecommendationList({ articleId, userId: authData!.id }, {
        refetchOnMountOrArgChange: true,
    });
    const [rateArticleMutation] = usePostArticleRating();

    const handlePostRating = useCallback((startsCount: number, feedback?: string) => {
        rateArticleMutation({
            userId: authData!.id,
            articleId,
            rate: startsCount,
            feedback,
        });
    }, [articleId, authData, rateArticleMutation]);

    const handleAccept = useCallback((startsCount: number, feedback?: string) => {
        handlePostRating(startsCount, feedback);
    }, [handlePostRating]);

    const handleCancel = useCallback((startsCount: number) => {
        handlePostRating(startsCount);
    }, [handlePostRating]);

    if (isLoading || isFetching) return <Skeleton width="100%" height={120} />;

    const rating = data?.[0]?.rate;

    return (
        <RatingCard
            rating={rating}
            title={t('Оцените статью')}
            hasFeedBack
            feedbackTitle={t('Оставьте отзыв о статье. Это поможет улучшить качество')}
            onAccept={handleAccept}
            onCancel={handleCancel}
            className={className}
        />
    );
};
