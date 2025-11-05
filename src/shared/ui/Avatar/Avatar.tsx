import { useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppImageFallback from '../../assets/avatarFallback.svg';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    url: string;
    alt: string;
    size?: number;
    fallbackInverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
    const { className, fallbackInverted, url, alt, size = 100 } = props;

    const styles = useMemo(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Icon={AppImageFallback} />;

    return (
        <div className={classNames(cls.Avatar, {}, [className])} style={styles}>
            <AppImage src={url} alt={alt} fallback={fallback} fallbackError={errorFallback} />
        </div>
    );
};
