import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    id: '22',
    title: 'Javascript news СВЕЖАЯ',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.04.2022',
    userId: '3',
    user: { id: '3', username: '' },
    type: [
        'IT',
    ],
    blocks: [],
};

export const createArticle = (article = defaultArticle) => cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { authorization: 'user' },
    body: article,
}).then(({ body }) => body);

export const removeArticle = (articleId: string) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { authorization: 'user' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>
            removeArticle(id: string): Chainable<void>
        }
    }
}
