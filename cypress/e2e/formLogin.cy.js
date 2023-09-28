describe('Form login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('if the email is valid', () => {
        cy.getByData('botao-login').click();
        cy.getByData('email-input').type('alienigena@email');
        cy.getByData('senha-input').type('123456');
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido');
    });
});