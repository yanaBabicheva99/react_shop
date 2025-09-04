import { User } from 'entities/User';
import { ArticleBlockType, ArticleType } from '../consts/articleConsts';

interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleBlockText extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[]
}

export interface ArticleBlockImage extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleBlockCode extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export type ArticleBlock = ArticleBlockCode | ArticleBlockText | ArticleBlockImage;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks?: ArticleBlock[];
    user: User;
    userId?: string;
}
