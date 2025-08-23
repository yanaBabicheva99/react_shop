import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import CopyIcon from 'shared/assets/copy.svg';
import { ArticleBlockCode as ArticleBlockCodeType } from '../../../model/types/article';
import cls from './ArticleBlockCode.module.scss';

interface ArticleBlockCodeProps {
    className?: string;
    block: ArticleBlockCodeType;
}

export const ArticleBlockCode = memo((props: ArticleBlockCodeProps) => {
    const {
        className,
        block,
    } = props;

    const copyText = useCallback(() => {
        navigator.clipboard.writeText(block.code);
    }, [block.code]);

    return (
        <div className={classNames(cls.ArticleBlockCode, {}, [className])}>
            <Button className={cls.copyBtn} onClick={copyText}>
                <Icon Icon={CopyIcon} className={cls.icon} fill={false} />
            </Button>
            <pre>
                <code>{block.code}</code>
            </pre>
        </div>
    );
});
