const elementos = {
    btnCadastrarTrabalhador: '.c-kUQtTK',
    nome: ':nth-child(1) > .c-jzRMpM',
    cpf: ':nth-child(3) > .c-jzRMpM',
    dataNascimento: ':nth-child(4) > .c-jzRMpM',
    rg: ':nth-child(5) > .c-jzRMpM',
    checkboxSemEPI: '.ant-checkbox-input',
    btnSalvar: '.c-dylnRB',
    ca: 'input[name="caNumber"]'
};
describe('Adicionar outra atividade', () => {
    it('não permite adicionar uma nova atividade quando clica no botão', () => {
        cy.visit('https://analista-teste.seatecnologia.com.br/');

        // Clicar no botão "Cadastrar Trabalhador" e validar que abriu o formulário
        cy.get(elementos.btnCadastrarTrabalhador).click()

        // Preencher campo Nome e validar o valor digitado
        cy.get(elementos.nome)
        .should('be.visible')
        .type('Giovana Alves')
        .should('have.value', 'Giovana Alves');

        // Preencher campo CPF e validar o valor digitado
        cy.get(elementos.cpf)
        .should('be.visible')
        .type('12345678910')
        .should('have.value', '12345678910');

        // Preencher campo Data de Nascimento e validar o valor digitado
        cy.get(elementos.dataNascimento)
        .should('be.visible')
        .type('2000-06-23')
        .should('have.value', '2000-06-23');

         // Preencher campo RG e validar o valor digitado
            cy.get(elementos.rg)
            .should('be.visible')
            .type('123456')
            .should('have.value', '123456');

            // Preencher campo CA e validar o valor digitado
            cy.get(elementos.ca)
            .should('be.visible')
            .type('1234')
            .should('have.value', '1234');

        //Verifica se o botão existe com o texto "Adicionar outra atividade", após isso efetua o clique para adicionar outra atividade
        cy.contains('button', 'Adicionar outra atividade')
        .should('be.visible')
        .click();
        // Validação do erro esperado:
        // Exemplo: o sistema volta para home ou não adiciona nenhuma atividade nova

    });
});
