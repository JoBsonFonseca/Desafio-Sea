const elementos = {
    btnCadastrarTrabalhador: '.c-kUQtTK',
    nome: ':nth-child(1) > .c-jzRMpM',
    cpf: ':nth-child(3) > .c-jzRMpM',
    dataNascimento: ':nth-child(4) > .c-jzRMpM',
    rg: ':nth-child(5) > .c-jzRMpM',
    checkboxSemEPI: '.ant-checkbox-input',
    btnSalvar: '.c-dylnRB'
};

describe('Cadastro de Funcionário', () => {
    it('Cadastro com sucesso', () => {
        cy.visit('https://analista-teste.seatecnologia.com.br/');

        cy.get(elementos.btnCadastrarTrabalhador).click();

        // Preencher formulário
        cy.get(elementos.nome).type('Giovana Alves');
        cy.get(elementos.cpf).type('12345678910');
        cy.get(elementos.dataNascimento).type('2000-06-23');
        cy.get(elementos.rg).type('123456');

        // Marcar checkbox "O trabalhador não usa EPI"
        cy.get(elementos.checkboxSemEPI).click();
        // Clicar no botão Salvar
        cy.get(elementos.btnSalvar).should('be.visible');
            cy.get(elementos.btnSalvar).click();

    });
});
