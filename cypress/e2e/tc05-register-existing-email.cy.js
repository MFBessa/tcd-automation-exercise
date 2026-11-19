import page from '../pages/AutomationPage';

describe('TC 05 - Register User with existing email', () => {
  it('Deve impedir cadastro com e-mail já existente', () => {
    cy.fixture('userData').then((user) => {
      const dados = { ...user, email: `qa_${Date.now()}@teste.com` };
      cy.criarUsuarioViaUI(dados);
      cy.contains('a', 'Logout').click();

      page.visitarHome();
      page.irParaLogin();
      cy.contains('New User Signup!').should('be.visible');
      cy.get('[data-qa="signup-name"]').type(dados.nome);
      cy.get('[data-qa="signup-email"]').type(dados.email);
      cy.get('[data-qa="signup-button"]').click();

      cy.contains('Email Address already exist!').should('be.visible');
    });
  });
});
