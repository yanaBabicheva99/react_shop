import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Icon,
    } = props;

    return (
        <div className={classNames(cls.Icon, {}, [className])}>
            <Icon />
        </div>
    );
};
