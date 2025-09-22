import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Popover } from '@/shared/ui/Popups';
import { Icon } from '@/shared/ui/Icon/Icon';
import NotificationIcon from '@/shared/assets/notification.svg';
import { NotificationList } from '@/entities/Notification';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import AnimationProviders from '@/shared/lib/components/AnimationProviders/AnimationProviders';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className,
    } = props;

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpenDrawer(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpenDrawer(false);
    }, []);

    const trigger = (
        <Button theme={ThemeButton.CLEAR} onClick={onOpenDrawer}>
            <Icon Icon={NotificationIcon} inverted />
        </Button>
    );

    return (
        <>
            <BrowserView>
                <Popover
                    direction="bottom left"
                    trigger={trigger}
                    className={className}
                    unmount={false}
                >
                    <NotificationList className={cls.notificationList} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProviders>
                    <Drawer isOpen={isOpenDrawer} onClose={onCloseDrawer}>
                        <NotificationList className={cls.notificationListMobile} />
                    </Drawer>
                </AnimationProviders>
            </MobileView>
        </>
    );
});
