import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { ArticleBlockText as ArticleBlockTextType } from '../../../model/types/article';

interface ArticleBlockTextProps {
    className?: string;
    block: ArticleBlockTextType;
}

export const ArticleBlockText = memo((props: ArticleBlockTextProps) => {
    const { className, block } = props;

    return (
        <VStack max gap="16" className={classNames('', {}, [className])}>
            {block.title && <Text title={block.title} />}
            {block.paragraphs.map((text) => (
                <Text key={text} text={text} />
            ))}
        </VStack>
    );
});
