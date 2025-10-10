import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';
import { ArticleSortField } from '../../model/consts/ArticlesSortConsts';
import { ArticleSortSelector } from '../ArticleSortSelector/ArticleSortSelector';
import { articlesSortAction, articlesSortReducer } from '../../model/slice/ArticlesSortSlice';
import {
    getSearchType, getSortField, getSortOrder, getSortSearch,
} from '../../model/selector/getArticlesSort';
import cls from './ArticlesSort.module.scss';

interface ArticlesSortProps {
    className?: string;
    fetchData: () => void;
}

const reducer: ReducersList = {
    articlesSort: articlesSortReducer,
};

export const ArticlesSort = memo((props: ArticlesSortProps) => {
    const {
        className,
        fetchData,
    } = props;

    const sortOrder = useSelector(getSortOrder);
    const sortField = useSelector(getSortField);
    const search = useSelector(getSortSearch);
    const type = useSelector(getSearchType);
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const { t } = useTranslation();

    const debouncedFetchData = useDebounce(fetchData, 500);

    const handleChangeSortOrder = useCallback((value: SortOrder) => {
        dispatch(articlesSortAction.setOrder(value));
        searchParams.set('order', value);
        setSearchParams(searchParams);
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const handleChangeSortField = useCallback((value: ArticleSortField) => {
        dispatch(articlesSortAction.setSort(value));
        searchParams.set('sort', value);
        setSearchParams(searchParams);
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const handleChangeSearch = useCallback((value: string) => {
        dispatch(articlesSortAction.setSearch(value));
        searchParams.set('search', value);
        setSearchParams(searchParams);
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const tabs = useMemo(() => [
        { value: ArticleType.ALL, content: t('Все') },
        { value: ArticleType.IT, content: t('IT') },
        { value: ArticleType.SCIENCE, content: t('Наука') },
        { value: ArticleType.ECONOMICS, content: t('Экономика') },
    ], []);

    const handleChangeType = useCallback((value: ArticleType) => {
        dispatch(articlesSortAction.setType(value));
        searchParams.set('type', value);
        setSearchParams(searchParams);
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    return (
        <DynamicModuleLoader reducers={reducer}>
            <div className={classNames(cls.ArticlesSort, {}, [className])}>
                <ArticleSortSelector
                    onChangeSortOrder={handleChangeSortOrder}
                    onChangeSortField={handleChangeSortField}
                    sortOrder={sortOrder}
                    sortField={sortField}
                />
                <Card theme={CardTheme.OUTLINE} className={cls.card}>
                    <Input
                        placeholder={t('Поиск')}
                        value={search}
                        onChange={handleChangeSearch}
                    />
                </Card>
                <Tabs<ArticleType>
                    tabs={tabs}
                    value={type}
                    onChange={handleChangeType}
                />
            </div>
        </DynamicModuleLoader>
    );
});
