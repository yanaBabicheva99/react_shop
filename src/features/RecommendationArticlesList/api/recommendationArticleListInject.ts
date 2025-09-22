import { rtkApi } from '@/shared/api/rtkApi';
import { Article } from '@/entities/Article';

const recommendationArticleListApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationList: build.query<Article[], number>({
            query: (limit) => ({
                method: 'GET',
                url: '/articles',
                params: { _expand: 'user', _limit: limit },
            }),
        }),
    }),
});

export const useArticleRecommendationList = recommendationArticleListApi.useGetArticleRecommendationListQuery;
