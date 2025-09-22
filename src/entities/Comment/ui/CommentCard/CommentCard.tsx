import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { NavLink } from '@/shared/ui/NavLink/NavLink';
import { HStack, VStack } from '@/shared/ui/Stack';
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
            <VStack max className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <HStack max justify="start" className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" className={cls.avatar} />
                    <Skeleton width={200} height={20} />
                </HStack>
                <Skeleton width="100%" height={30} />
            </VStack>
        );
    }

    if (!comment) return null;

    return (
        <VStack max className={classNames(cls.CommentCard, {}, [className])}>
            <NavLink to={`/profile/${comment.user.id}`}>
                <HStack max className={cls.header}>
                    {comment.user.avatar && (
                        <Avatar
                            url={comment.user.avatar}
                            alt="avatar"
                            size={30}
                            className={cls.avatar}
                        />
                    )}
                    <Text text={comment.user.username} />
                </HStack>
            </NavLink>
            <Text text={comment.text} />
        </VStack>
    );
};
