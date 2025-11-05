import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleListItem.module.scss';

interface ArticleListSkeletonProps {
    className?: string;
    view?: ArticleView;
}

export const ArticleListSkeleton = (props: ArticleListSkeletonProps) => {
    const { className, view = ArticleView.SMALL } = props;

    if (view === ArticleView.SMALL) {
        return (
            <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <div className={cls.header}>
                    <Skeleton width="100%" height={150} />
                </div>
                <div className={cls.footer}>
                    <div className={cls.textHeader}>
                        <Skeleton width="100%" height={13} />
                    </div>
                    <Skeleton width="100%" height={22} />
                </div>
            </Card>
        );
    }

    return (
        <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <div className={cls.header}>
                <Skeleton width={110} height={16} className={cls.created} />
                <div className={cls.avatar}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={150} height={16} className={cls.avatarText} />
                </div>
                <Skeleton width={500} height={24} className={cls.title} />
                <Skeleton width={80} height={16} className={cls.text} />
                <div className={cls.imageWrapper}>
                    <Skeleton width="100%" height="100%" />
                </div>
            </div>
            <Skeleton width="100%" height={70} className={cls.blockText} />
            <div className={cls.footer}>
                <Skeleton width={100} height={32} />
            </div>
        </Card>
    );
};
