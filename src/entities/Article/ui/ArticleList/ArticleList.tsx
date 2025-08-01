import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListSkeleton } from 'entities/Article/ui/ArticleList/ArticleListSkeleton';
import { ArticleListItem, ViewItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
}

const article = {
    id: '1',
    title: 'Javascript news Javascript news Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [
        'IT',
        'SCIENCE',
    ],
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
    blocks: [
        {
            id: '1',
            type: 'TEXT',
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
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n   '
                + '   document.getElementById("hello").innerHTML = "Hello, world!";\n   '
                + ' </script>\n  </body>\n</html>;',
        },
    ],
};

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
    } = props;

    // const { t } = useTranslation();
    const isLoading = false;

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className])}>
                <ArticleListSkeleton view={ViewItem.BIG} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {new Array(8).fill(article).map((article) => (
                <ArticleListItem view={ViewItem.SMALL} article={article} />
            ))}
        </div>
    );
};
