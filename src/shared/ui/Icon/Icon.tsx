import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    fill?: boolean;
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Icon,
        fill = true,
    } = props;

    return (
        <div className={classNames('', { [cls.fill]: fill }, [className])}>
            <Icon />
        </div>
    );
};
