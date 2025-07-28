import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Comment } from '../../model/types/comment';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
    const {
        className,
        isLoading,
        comment,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" className={cls.avatar} />
                    <Skeleton width={200} height={20} />
                </div>
                <Skeleton width="100%" height={30} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment?.user.avatar && (
                    <Avatar
                        url={comment.user.avatar}
                        alt="avatar"
                        size={30}
                        className={cls.avatar}
                    />
                )}
                <Text text={comment?.user.username} />
            </div>
            <Text text={comment?.text} />
        </div>
    );
};
