import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfinityScroll } from '@/shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { scrollTrackingActions, getScrollPosition } from '@/features/ScrollTracking';
import { useThrottle } from '@/shared/lib/hooks/useTrottling/useThrottle';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { StateSchema } from '@/app/providers/StoreProvider';
import cls from './Page.module.scss';
import { TestProps } from '@/shared/types/testProps';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd, 'data-testid': dataTestId } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();

    const scrollPosition = useSelector((state: StateSchema) => getScrollPosition(state, pathname));

    const dispath = useAppDispatch();

    useInfinityScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispath(
            scrollTrackingActions.setScrollPosition({
                path: pathname,
                position: e.currentTarget.scrollTop,
            }),
        );
    }, 500);

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={handleScroll}
            data-testid={dataTestId}
        >
            {children}
            <div ref={triggerRef} className={cls.ref} />
        </main>
    );
};
