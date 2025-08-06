import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from '../types/articleView';

export const getArticleListLoading = (state: StateSchema) => state?.articleList?.isLoading;
export const getArticleListLoadingNextPage = (state: StateSchema) => state.articleList?.isLoadingNextPage;
export const getArticleView = (state: StateSchema) => state.articleList?.articleView || ArticleView.SMALL;
export const getPageLimit = (state: StateSchema) => state.articleList?.limit;
export const getPageNumber = (state: StateSchema) => state.articleList?.page || 1;
export const getHasMore = (state: StateSchema) => state.articleList?.hasMore;
export const articleListInited = (state: StateSchema) => state.articleList?._inited;
