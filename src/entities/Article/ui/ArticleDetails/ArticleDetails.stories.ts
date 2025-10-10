import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import Img from '@/shared/assets/test/storybook/img.png';
import { ArticleBlockType, ArticleType } from '../../model/consts/articleConsts';
import { ArticleDetails } from './ArticleDetails';
import { Theme } from '@/shared/const/theme';

const articleInfo = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: Img,
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: Img,
            title: 'Рисунок 1 - скриншот сайта',
        },
    ],
};

const meta: Meta<typeof ArticleDetails> = {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const NormalArticleDetail: Story = {
    args: {},
};

NormalArticleDetail.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    articleDetails: {
        data: articleInfo,
    },
})];

export const DarkArticleDetail: Story = {
    args: {},
};

DarkArticleDetail.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleDetails: {
        data: articleInfo,
    },
})];

export const OrangeArticleDetail: Story = {
    args: {},
};

OrangeArticleDetail.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({
    articleDetails: {
        data: articleInfo,
    },
})];

export const LoadingArticleDetail: Story = {
    args: {},
};

LoadingArticleDetail.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];

export const LoadingArticleDetailDark: Story = {
    args: {},
};

LoadingArticleDetailDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];

export const LoadingArticleDetailOrange: Story = {
    args: {},
};

LoadingArticleDetailOrange.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];

export const ErrorArticleDetail: Story = {
    args: {},
};

ErrorArticleDetail.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    articleDetails: {
        error: 'Some error',
    },
})];

export const ErrorArticleDetailDark: Story = {
    args: {},
};

ErrorArticleDetailDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleDetails: {
        error: 'Some error',
    },
})];

export const ErrorArticleDetailOrange: Story = {
    args: {},
};

ErrorArticleDetailOrange.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({
    articleDetails: {
        error: 'Some error',
    },
})];
