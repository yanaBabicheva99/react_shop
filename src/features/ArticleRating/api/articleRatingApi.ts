import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface GetArticleRatingArg {
    articleId: string;
    userId: string;
}

interface PostArticleRating extends GetArticleRatingArg {
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], GetArticleRatingArg>({
            query: (params) => ({
                method: 'GET',
                url: '/article-ratings',
                params,
            }),
        }),
        postArticleRating: build.mutation<void, PostArticleRating>({
            query: (body) => ({
                method: 'POST',
                url: '/article-ratings',
                body,
            }),
        }),
    }),
});

export const useArticleRecommendationList = articleRatingApi.useGetArticleRatingQuery;
export const usePostArticleRating = articleRatingApi.usePostArticleRatingMutation;
