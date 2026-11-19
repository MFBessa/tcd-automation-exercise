Cypress.Commands.add('criarUsuarioViaUI', (dados) => {
  cy.visit('/login');
  cy.get('[data-qa="signup-name"]').type(dados.nome);
  cy.get('[data-qa="signup-email"]').type(dados.email);
  cy.get('[data-qa="signup-button"]').click();

  cy.get('#id_gender1').check();
  cy.get('[data-qa="password"]').type(dados.senha);
  cy.get('[data-qa="days"]').select(dados.dia);
  cy.get('[data-qa="months"]').select(dados.mes);
  cy.get('[data-qa="years"]').select(dados.ano);
  cy.get('#newsletter').check();
  cy.get('#optin').check();

  cy.get('[data-qa="first_name"]').type(dados.nome);
  cy.get('[data-qa="last_name"]').type(dados.sobrenome);
  cy.get('[data-qa="company"]').type(dados.empresa);
  cy.get('[data-qa="address"]').type(dados.endereco);
  cy.get('[data-qa="country"]').select(dados.pais);
  cy.get('[data-qa="state"]').type(dados.estado);
  cy.get('[data-qa="city"]').type(dados.cidade);
  cy.get('[data-qa="zipcode"]').type(dados.cep);
  cy.get('[data-qa="mobile_number"]').type(dados.telefone);

  cy.get('[data-qa="create-account"]').click();
  cy.get('[data-qa="account-created"]').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
});

Cypress.Commands.add('deletarConta', () => {
  cy.contains('a', 'Delete Account').click();
  cy.get('[data-qa="account-deleted"]').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
});
