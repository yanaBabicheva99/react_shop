import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getScrollPosition = createSelector(
    (state: StateSchema) => state.scroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
