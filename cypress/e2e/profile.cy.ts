let userId = '';
describe('template spec', () => {
    it('станица профиля загрузилась', () => {
        cy.login('test', '123').then(({ id }) => {
            userId = id;
            cy.visit(`profile/${id}`);
            cy.getByTestId('Input.firstName').should('have.value', 'TestFirst');
            cy.getByTestId('Input.lastName').should('have.value', 'TestLast');
            cy.updateProfile(id);
            cy.getByTestId('Input.firstName').should('have.value', 'newFirstName');
            cy.getByTestId('Input.lastName').should('have.value', 'newLastName');
        });
    });

    afterEach(() => {
        cy.resetProfile(userId);
    });
});
