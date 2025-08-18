import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Image from 'shared/assets/test/storybook/img.png';
import {
    Article, ArticleBlockType, ArticleType, ArticleView,
} from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';

const article = {
    id: '1',
    title: 'Javascript news Javascript news Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: Image,
    views: 1022,
    createdAt: '26.02.2022',
    type: [
        ArticleType.IT,
        ArticleType.SCIENCE,
        ArticleType.ECONOMICS,
    ],
    user: {
        id: '1',
        username: 'admin',
        avatar: Image,
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу'
                + ' «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае '
                + 'речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали'
                + ' ни строчки кода на JS '
                + 'и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально '
                + 'в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. '
                + 'Так, если говорить об обычном использовании программ',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n   '
                + '   document.getElementById("hello").innerHTML = "Hello, world!";\n   '
                + ' </script>\n  </body>\n</html>;',
        },
    ],
} as Article;

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/ArticleListItem',
    component: ArticleListItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const NormalArticleListItem: Story = {
    args: {
        article,
    },
};

NormalArticleListItem.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkArticleListItem: Story = {
    args: {
        article,
    },
};

DarkArticleListItem.decorators = ThemeDecorator(Theme.DARK);

export const OrangeArticleListItem: Story = {
    args: {
        article,
    },
};

OrangeArticleListItem.decorators = ThemeDecorator(Theme.ORANGE);

export const NormalArticleListItemBig: Story = {
    args: {
        article,
        view: ArticleView.BIG,
    },
};

NormalArticleListItemBig.decorators = ThemeDecorator(Theme.LIGHT);

export const DarkArticleListItemBig: Story = {
    args: {
        article,
        view: ArticleView.BIG,
    },
};

DarkArticleListItemBig.decorators = ThemeDecorator(Theme.DARK);

export const OrangeArticleListItemBig: Story = {
    args: {
        article,
        view: ArticleView.BIG,
    },
};

OrangeArticleListItemBig.decorators = ThemeDecorator(Theme.ORANGE);
