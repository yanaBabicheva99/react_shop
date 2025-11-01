describe('template spec', () => {
    it('Станица статей отрисовалась', () => {
        cy.login('test', '123').then(() => {
            cy.visit('/articles');
            cy.getByTestId('ArticleList').should('exist');
            cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
        });
    });
});
