import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotificationList: build.query<Notification[], void>({
            query: () => ({
                method: 'GET',
                url: '/notifications',
            }),
        }),
    }),
});

export const useNotificationList = notificationApi.useGetNotificationListQuery;
