import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Img from 'shared/assets/test/storybook/js.png';
import AvatarIcon from 'shared/assets/test/storybook/img.png';
import { Article } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { RecommendationArticlesList } from './RecommendationArticlesList';

const articles = [
    {
        id: '2',
        title: 'Kotlin news',
        subtitle: 'Что нового в Kotlin за 2022 год?',
        img: Img,
        views: 1022,
        createdAt: '26.02.2022',
        type: [
            'IT',
        ],
        userId: '1',
        user: {
            username: 'user',
            avatar: AvatarIcon,
        },
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Kotlin - это современный, статически типизированный язык программирования, разработанный компанией JetBrains',
                    'Он широко используется для разработки приложений под Android, а также для серверных и кросс-платформенных решений. Kotlin совместим с Java, что позволяет использовать его в существующих Java-проектах и постепенно переходить на Kotlin. ',
                ],
            },
        ],
    },
    {
        id: '1',
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2022 год?',
        img: Img,
        views: 1022,
        createdAt: '26.02.2022',
        type: [
            'IT',
        ],
        userId: '1',
        user: {
            username: 'user',
            avatar: AvatarIcon,
        },
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
            {
                id: '9',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                ],
            },
        ],
    },
    {
        id: '3',
        title: 'Kotlin news',
        subtitle: 'Что нового в Kotlin за 2022 год?',
        img: Img,
        views: 1022,
        createdAt: '26.02.2022',
        type: [
            'IT',
        ],
        userId: '1',
        user: {
            username: 'user',
            avatar: AvatarIcon,
        },
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Kotlin - это современный, статически типизированный язык программирования, разработанный компанией JetBrains',
                    'Он широко используется для разработки приложений под Android, а также для серверных и кросс-платформенных решений. Kotlin совместим с Java, что позволяет использовать его в существующих Java-проектах и постепенно переходить на Kotlin. ',
                ],
            },
        ],
    },
] as Article[];

const meta: Meta<typeof RecommendationArticlesList> = {
    title: 'features/RecommendationArticlesList',
    component: RecommendationArticlesList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof RecommendationArticlesList>;

export const NormalRecommendationArticlesList: Story = {
    args: {},
};

NormalRecommendationArticlesList.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    recommendationArticlesList: {
        ids: [1, 2, 3],
        entities: {
            1: articles[1],
            2: articles[0],
            3: articles[2],
        },
    },
})];
NormalRecommendationArticlesList.parameters = {
    fetchMock: {
        mocks: [
            {
                matcher: `${__API__}/articles?_expand=user&_limit=4`, // URL to match
                response: articles, // Mocked response
                delay: 500, // Optional delay
            },
        ],
    },
};

export const DarkRecommendationArticlesList: Story = {
    args: {},
};

DarkRecommendationArticlesList.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    recommendationArticlesList: {
        ids: [1, 2, 3],
        entities: {
            1: articles[1],
            2: articles[0],
            3: articles[2],
        },
    },
})];

DarkRecommendationArticlesList.parameters = {
    fetchMock: {
        mocks: [
            {
                matcher: `${__API__}/articles?_expand=user&_limit=4`, // URL to match
                response: articles, // Mocked response
                delay: 500, // Optional delay
            },
        ],
    },
};

export const OrangeRecommendationArticlesList: Story = {
    args: {},
};

OrangeRecommendationArticlesList.decorators = [ThemeDecorator(Theme.ORANGE), StoreDecorator({
    recommendationArticlesList: {
        ids: [1, 2],
        entities: {
            1: articles[1],
            2: articles[0],
            3: articles[2],
        },
    },
})];

OrangeRecommendationArticlesList.parameters = {
    fetchMock: {
        mocks: [
            {
                matcher: `${__API__}/articles?_expand=user&_limit=4`, // URL to match
                response: articles, // Mocked response
                delay: 500, // Optional delay
            },
        ],
    },
};
