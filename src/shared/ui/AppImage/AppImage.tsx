import { ImgHTMLAttributes, ReactElement, useLayoutEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback: ReactElement;
    fallbackError?: ReactElement;
}

export const AppImage = (props: AppImageProps) => {
    const { className, fallback, fallbackError, src, alt, ...rest } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const image = new Image();
        image.src = src ?? '';
        image.onload = () => {
            setIsLoading(false);
        };
        image.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && fallbackError) {
        return fallbackError;
    }

    return <img className={classNames('', {}, [className])} src={src} alt={alt} {...rest} />;
};
