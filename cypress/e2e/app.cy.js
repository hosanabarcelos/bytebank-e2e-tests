describe('Home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('if the h1 tag is rendered with the correct text', () => {
        cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!');
    });
});