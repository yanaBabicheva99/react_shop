import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import StartIcon from '@/shared/assets/star.svg';
import { HStack } from '../Stack';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const starts = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        size = 30,
        selectedStars = 0,
        onSelect,
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    const onHover = (startsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(startsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    return (
        <div className={classNames('', {}, [className])}>
            <HStack gap="8">
                {starts.map((starNumber) => (
                    <Icon
                        key={starNumber}
                        Icon={StartIcon}
                        width={size}
                        height={size}
                        fill={starNumber <= currentStarsCount}
                        className={classNames(cls.starIcon, {
                            [cls.hovered]: starNumber <= currentStarsCount,
                            [cls.isSelected]: isSelected,
                        })}
                        onMouseLeave={onLeave}
                        onMouseEnter={onHover(starNumber)}
                        onClick={onClick(starNumber)}
                    />
                ))}
            </HStack>
        </div>
    );
});
