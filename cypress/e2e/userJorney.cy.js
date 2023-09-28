describe('User jorney', () => {
    it('if the user can access the application, perform a transaction and log out', () => {
        //acessa a página inicial
        cy.visit('/');

        //faz login
        cy.getByData('botao-login').click();
        cy.getByData('email-input').type('alien@email.com');
        cy.getByData('senha-input').type('123456');
        cy.getByData('botao-enviar').click();

        //verifica se a página acessada foi a Home
        cy.location('pathname').should('eq', '/home');

        //faz uma transferência no valor de R$80,00
        cy.getByData('select-opcoes').select('Transferência');
        cy.getByData('form-input').type('80');
        cy.getByData('realiza-transacao').click();

        //verifica se a transação foi realizada
        cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80');

        //faz logout
        cy.getByData('botao-sair').click();
        cy.location('pathname').should('eq', '/');
    });
});