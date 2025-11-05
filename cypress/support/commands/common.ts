import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage';
import { User } from '../../../src/entities/User';
import { selectByTestId } from '../../helpers/getByTestId';

export const login = (username: string, password: string) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/login',
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
            return body;
        });

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Chainable<User>;
            getByTestId(id: string): Chainable<Element>;
            // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
            // dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
            // visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
        }
    }
}
