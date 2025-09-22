import { Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../Stack';
import { Text } from '../../../Text/Text';
import { Button, ThemeButton } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { dropdownDirectionClasses } from '../../styles/popupClasses';

interface ListBoxOption {
    value: string;
    content: string;
    disabled?: boolean;
}

interface ListBoxProps<T> {
    className?: string;
    options: ListBoxOption[];
    value?: T,
    onChange: (value: T) => void;
    defaultValue?: T;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className, onChange, value, defaultValue,
        options,
        readonly,
        direction = 'bottom right',
        label,
    } = props;
    const { t } = useTranslation();

    const additionalClassesOptions = [dropdownDirectionClasses[direction]];

    return (
        <HStack gap="8" align="center">
            {label && <Text text={`${label} >`} />}
            <Listbox as="div" value={value} onChange={onChange} className={classNames(popupCls.Popup, {}, [className])}>
                <Listbox.Button className={popupCls.trigger} as="div">
                    <Button theme={ThemeButton.OUTLINE} disabled={readonly}>
                        { value ?? defaultValue ?? t('Выберите значение')}
                    </Button>
                </Listbox.Button>
                <Listbox.Options className={classNames(cls.options, {}, additionalClassesOptions)}>
                    {options.map((item) => (
                        <Listbox.Option
                            disabled={item.disabled}
                            key={item.value}
                            value={item.value}
                            as={Fragment}
                        >
                            {({ active, selected }) => {
                                const mods = {
                                    [cls.selected]: selected,
                                    [popupCls.disabled]: item.disabled,
                                    [popupCls.active]: active,
                                };
                                return (
                                    <li className={classNames(cls.item, mods)}>
                                        {item.content}
                                        {selected && ' !!!'}
                                    </li>
                                );
                            }}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </HStack>
    );
};
