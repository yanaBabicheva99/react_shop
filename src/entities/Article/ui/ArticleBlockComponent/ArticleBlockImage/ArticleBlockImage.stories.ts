import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Img from 'shared/assets/test/storybook/js.png';
import { ArticleBlockType } from '../../../model/types/article';
import { ArticleBlockImage } from './ArticleBlockImage';

const meta: Meta<typeof ArticleBlockImage> = {
    title: 'entities/ArticleBlockImage',
    component: ArticleBlockImage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleBlockImage>;

export const NormalArticleBlockImage: Story = {
    args: {
        block: {
            id: '1',
            type: ArticleBlockType.IMAGE,
            src: Img,
            title: 'JS картинка',
        },
    },
};

NormalArticleBlockImage.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkArticleBlockImage: Story = {
    args: {
        block: {
            id: '1',
            type: ArticleBlockType.IMAGE,
            src: Img,
            title: 'JS картинка',
        },
    },
};

DarkArticleBlockImage.decorators = ThemeDecorator(Theme.DARK);
