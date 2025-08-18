import { classNames } from 'shared/lib/classNames/classNames';
import {
    MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { scrollTrackingActions } from 'features/ScrollTracking/model/slice/ScrollTrackingSlice';
import { useLocation } from 'react-router-dom';
import { useThrottle } from 'shared/lib/hooks/useTrottling/useThrottle';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { getScrollPosition } from 'features/ScrollTracking/model/selectors/getScrollPosition';
import { StateSchema } from 'app/providers/StoreProvider';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();

    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollPosition(state, pathname),
    );

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
        dispath(scrollTrackingActions.setScrollPosition({
            path: pathname,
            position: e.currentTarget.scrollTop,
        }));
    }, 500);

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={handleScroll}
        >
            {children}
            <div ref={triggerRef} className={cls.ref} />
        </section>
    );
};
