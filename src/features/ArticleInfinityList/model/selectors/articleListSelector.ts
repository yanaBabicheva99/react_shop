import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleView } from '@/entities/Article';

export const getArticleInfinityListLoading = (state: StateSchema) => state?.articleInfinityList?.isLoading;
export const getArticleView = (state: StateSchema) => state.articleInfinityList?.articleView || ArticleView.SMALL;
export const getPageLimit = (state: StateSchema) => state.articleInfinityList?.limit;
export const getPageNumber = (state: StateSchema) => state.articleInfinityList?.page || 1;
export const getHasMore = (state: StateSchema) => state.articleInfinityList?.hasMore;
export const articleInfiniteListInited = (state: StateSchema) => state.articleInfinityList?._inited;
