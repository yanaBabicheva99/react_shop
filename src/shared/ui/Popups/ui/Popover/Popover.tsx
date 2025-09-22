import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';
import { dropdownDirectionClasses } from '../../styles/popupClasses';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    children: ReactNode;
    direction?: DropdownDirection;
    unmount?: boolean;
}

export const Popover = (props: PopoverProps) => {
    const {
        className,
        trigger,
        children,
        direction = 'bottom right',
        unmount,
    } = props;

    const additionalMenuClasses = [dropdownDirectionClasses[direction]];

    return (
        <HPopover className={classNames(popupCls.Popup, {}, [className])}>
            <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>

            <HPopover.Panel unmount={unmount} className={classNames(cls.panel, {}, additionalMenuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
