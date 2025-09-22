import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useNotificationList } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = (props: NotificationListProps) => {
    const {
        className,
    } = props;

    const { data: notifications, isLoading } = useNotificationList(undefined, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack gap="16" max className={cls.skeleton}>
                <Skeleton width="100%" height="70px" border="8px" />
                <Skeleton width="100%" height="70px" border="8px" />
                <Skeleton width="100%" height="70px" border="8px" />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {notifications?.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
            ))}
        </VStack>
    );
};
