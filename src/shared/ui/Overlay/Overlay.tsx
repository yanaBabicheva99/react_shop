import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClickHandler?: () => void;
}

export const Overlay = (props: OverlayProps) => {
    const { className, onClickHandler } = props;

    return <div className={classNames(cls.Overlay, {}, [className])} onClick={onClickHandler} />;
};
