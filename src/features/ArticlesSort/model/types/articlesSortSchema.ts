import { SortOrder } from 'shared/types/sort';
import { ArticleType } from 'entities/Article';
import { ArticleSortField } from '../consts/ArticlesSortConsts';

export interface ArticlesSortSchema {
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
}
