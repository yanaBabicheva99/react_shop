let articleId = '';
let articleTitle = '';
describe('template spec', () => {
    beforeEach(() => {
        cy.login('test', '123');

        cy.createArticle().then(({ id, title }) => {
            articleId = id;
            articleTitle = title;
            cy.visit(`/articles/${articleId}`);
        });
    });

    it('Станица статьи отрисовалась', () => {
        cy.getByTestId('HeaderTag.ArticleTitle').should('contain.text', articleTitle);
        cy.getByTestId('ArticleInfo').should('exist');
    });

    it('Комментарий можно добавить', () => {
        cy.getByTestId('ArticleComment').should('exist');
        cy.getByTestId('Input.Comment').type('Хорошая статья');
        cy.get('button').contains('Отправить').click();
    });

    it('Можно выбрать рейтинг', () => {
        cy.getByTestId('Star.Rating').scrollIntoView();
        cy.getByTestId('StarRating.4').click();
        cy.get('h2').contains('Оставьте отзыв о статье. Это поможет улучшить качество').should('exist');
        cy.get('button').contains('Закрыть').click();
        cy.wait(500);
        cy.getByTestId('Star.Rating').scrollIntoView();
        cy.get('[data-selected="true"]').should('have.length', 4);
    });

    afterEach(() => {
        cy.removeArticle(articleId);
    });
});

// Можно испольщовать фикстуры
// describe('', () => {
//     it('', () => {
//         cy.intercept('GET', '**/articles?*', { fixture: 'article-details.json' });
//     });
// });
