import { SortOrder } from 'shared/types/sort';
import { ArticleType } from 'entities/Article';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

export interface ArticlesSortSchema {
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
}
