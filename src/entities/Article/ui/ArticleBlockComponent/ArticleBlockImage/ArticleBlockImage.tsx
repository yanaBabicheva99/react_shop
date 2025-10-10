import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticleBlockImage as ArticleBlockImageType } from '../../../model/types/article';
import cls from './ArticleBlockImage.module.scss';

interface ArticleBlockImageProps {
    className?: string;
    block: ArticleBlockImageType;
}

export const ArticleBlockImage = memo((props: ArticleBlockImageProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={classNames(cls.ArticleBlockImage, {}, [className])}>
            <img src={block.src} alt="img" />
            {block.title && <Text text={block.title} />}
        </div>
    );
});
