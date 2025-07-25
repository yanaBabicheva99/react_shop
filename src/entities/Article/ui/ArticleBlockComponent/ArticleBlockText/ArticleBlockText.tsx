import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { memo } from 'react';
import cls from './ArticleBlockText.module.scss';
import { ArticleBlockText as ArticleBlockTextType } from '../../../model/types/article';

interface ArticleBlockTextProps {
    className?: string;
    block: ArticleBlockTextType;
}

export const ArticleBlockText = memo((props: ArticleBlockTextProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={classNames(cls.ArticleBlockText, {}, [className])}>
            {block.title && (
                <Text className={cls.title} title={block.title} />
            )}
            {block.paragraphs.map((text) => <Text key={text} text={text} className={cls.paragraph} />)}
        </div>
    );
});
