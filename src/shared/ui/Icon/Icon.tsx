import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'fill'> {
    className?: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    fill?: boolean;
    inverted?: boolean;
}

export const Icon = (props: IconProps) => {
    const { className, Icon, fill = true, inverted, ...otherProps } = props;

    const mods = {
        [cls.fill]: fill,
        [cls.inverted]: inverted,
    };

    return (
        <div className={classNames('', mods, [className])}>
            <Icon {...otherProps} />
        </div>
    );
};
