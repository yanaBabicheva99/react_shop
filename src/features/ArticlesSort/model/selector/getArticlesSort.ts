import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities/Article';

import { ArticleSortField } from '../consts/ArticlesSortConsts';

export const getSortOrder = (state: StateSchema) => state.articlesSort?.order || 'desc';
export const getSortField = (state: StateSchema) => state.articlesSort?.sort || ArticleSortField.CREATED;
export const getSortSearch = (state: StateSchema) => state.articlesSort?.search;
export const getSearchType = (state: StateSchema) => state.articlesSort?.type || ArticleType.ALL;
