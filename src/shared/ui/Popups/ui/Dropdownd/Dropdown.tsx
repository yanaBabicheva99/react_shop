import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { NavLink } from '../../../NavLink/NavLink';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { dropdownDirectionClasses } from '../../styles/popupClasses';

interface DropDownItem {
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
}

interface DropdownProps {
    className?: string;
    trigger: ReactNode;
    options: DropDownItem[];
    direction?: DropdownDirection;
}

export const Dropdown = (props: DropdownProps) => {
    const {
        className,
        trigger,
        options,
        direction = 'bottom right',
    } = props;

    const additionalMenuClasses = [dropdownDirectionClasses[direction]];

    return (
        <Menu as="div" className={classNames(popupCls.Popup, {}, [className])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, additionalMenuClasses)}>
                {options.map((option, index) => {
                    const content = (active: boolean) => (
                        <button
                            className={classNames(cls.item, {
                                [popupCls.active]: active,
                                [popupCls.disabled]: option.disabled,
                            })}
                            onClick={option.onClick}
                            disabled={option.disabled}
                        >
                            {option.content}
                        </button>
                    );

                    if (option.href) {
                        return (
                            <Menu.Item disabled={option.disabled} as={NavLink} to={option.href} key={index}>
                                {({ active }) => content(active)}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item disabled={option.disabled} as={Fragment} key={index}>
                            {({ active }) => content(active)}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
