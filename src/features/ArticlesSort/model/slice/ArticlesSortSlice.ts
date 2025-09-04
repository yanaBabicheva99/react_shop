import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortOrder } from 'shared/types/sort';
import { ArticleType } from 'entities/Article';
import { ArticleSortField } from '../consts/ArticlesSortConsts';
import { ArticlesSortSchema } from '../types/articlesSortSchema';

const initialState: ArticlesSortSchema = {
    order: 'desc',
    sort: ArticleSortField.CREATED,
    search: '',
    type: ArticleType.ALL,
};

export const articlesSortSlice = createSlice({
    name: 'articles/sort',
    initialState,
    reducers: {
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initSortParams: (state, action: PayloadAction<{key: string, value: string | ArticleSortField | SortOrder}>) => {
            const { key, value } = action.payload;
            switch (key) {
            case 'sort': state.sort = value as ArticleSortField;
                break;
            case 'order': state.order = value as SortOrder;
                break;
            case 'type': state.type = value as ArticleType;
                break;
            default: state.search = value;
            }
        },
    },
});

export const { actions: articlesSortAction } = articlesSortSlice;
export const { reducer: articlesSortReducer } = articlesSortSlice;
