describe('Form register', ()=>{
    beforeEach(()=>{
      cy.visit('http://localhost:3000')
    });

    it('if it is possible to register with the correct data', () => {
      cy.getByData('botao-cadastro').click();
      cy.getByData('nome-input').type('Astronauta Lima');
      cy.getByData('email-input').type('astronautalima@email.com');
      cy.getByData('senha-input').type('123456');
      cy.getByData('botao-enviar').click();
      cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!');
    });
});