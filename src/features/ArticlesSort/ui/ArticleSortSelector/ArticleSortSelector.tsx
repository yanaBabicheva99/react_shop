import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '../../model/consts/ArticlesSortConsts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    onChangeSortOrder: (order: SortOrder) => void;
    onChangeSortField: (sort: ArticleSortField) => void;
    sortOrder: SortOrder;
    sortField: ArticleSortField;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const { className, onChangeSortOrder, onChangeSortField, sortOrder, sortField } = props;

    const { t } = useTranslation();

    const sortFiledOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () =>
            Object.keys(ArticleSortField).map((field) => ({
                value: ArticleSortField[field as keyof typeof ArticleSortField],
                content: t(`${field}`),
            })),
        [],
    );

    const sortOrderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            { value: 'asc', content: t('По возрастанию') },
            { value: 'desc', content: t('По убыванию') },
        ],
        [],
    );

    return (
        <div className={classNames(cls.ArticleSort, {}, [className])}>
            <Select<ArticleSortField>
                label={t('Сортировать По')}
                onChange={onChangeSortField}
                options={sortFiledOptions}
                value={sortField}
                className={cls.select}
            />
            <Select<SortOrder>
                label={t('по')}
                onChange={onChangeSortOrder}
                options={sortOrderOptions}
                value={sortOrder}
                className={cls.select}
            />
        </div>
    );
};
