import { classNames } from 'shared/lib/classNames/classNames';
import { useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    url: string;
    alt: string;
    size?: number;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        url,
        alt,
        size = 100,
    } = props;

    const styles = useMemo(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <div className={classNames(cls.Avatar, {}, [className])} style={styles}>
            <img src={url} alt={alt} />
        </div>
    );
};
