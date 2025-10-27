import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFound = (props: NotFoundProps) => {
    const { t } = useTranslation();
    const {
        className,
    } = props;

    return (
        <Page data-testid="NotFoundPage" className={classNames(cls.NotFound, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
};
