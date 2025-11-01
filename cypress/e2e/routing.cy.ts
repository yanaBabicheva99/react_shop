describe('Test routing', () => {
    it('Test main route', () => {
        cy.visit('/');
        cy.get('main[data-testid=MainPage]').should('exist');
    });

    it('Test not found page', () => {
        cy.visit('/asasas');
        cy.get('main[data-testid=NotFoundPage]').should('exist');
    });

    it('Test profile route without auth', () => {
        cy.visit('/profile/1');
        cy.getByTestId('MainPage').should('exist');
    });

    it('Test profile route with auth', () => {
        cy.login('test', '123');
        cy.visit('/profile/1');
        cy.getByTestId('ProfilePage').should('exist');
    });

    it('Test admin route with auth', () => {
        cy.login('test', '123');
        cy.visit('/admin');
        cy.getByTestId('AdminPage').should('exist');
    });
});
