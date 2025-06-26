import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
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
        <div className={classNames(cls.NotFound, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
