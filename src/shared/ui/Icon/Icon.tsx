import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    fill?: boolean;
    inverted?: boolean;
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Icon,
        fill = true,
        inverted,
    } = props;

    const mods = {
        [cls.fill]: fill,
        [cls.inverted]: inverted,
    };

    return (
        <div className={classNames('', mods, [className])}>
            <Icon />
        </div>
    );
};
