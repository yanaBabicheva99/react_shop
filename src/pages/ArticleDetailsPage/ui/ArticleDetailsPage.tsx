import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    ArticleCommentList,
} from 'features/ArticleCommentList';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation();

    if (!id) {
        return <Text text={t('Статья не найдена')} theme={TextTheme.ERROR} />;
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <ArticleCommentList id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
