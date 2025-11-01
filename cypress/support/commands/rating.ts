export const selectStar = () => {

};

export const resetProfile = (id: string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${id}`,
    headers: { authorization: 'user' },
    body: {
        id: '3',
        first: 'TestFirst',
        lastname: 'TestLast',
        age: 35,
        currency: 'EUR',
        country: 'RUSSIAN',
        city: 'Москва',
        username: 'user',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUvS5qslYqAhTDaANDQVqw6L-j2YVrp5ZlKQ&s',
    },
});

declare global {
    namespace Cypress {
        interface Chainable {
            resetProfile(id: string): Chainable<void>
            updateProfile(id: string): Chainable<void>
        }
    }
}
