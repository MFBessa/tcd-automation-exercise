import page from '../pages/AutomationPage';

describe('TC 04 - Logout User', () => {
  it('Deve deslogar o usuário corretamente', () => {
    cy.fixture('userData').then((user) => {
      const dados = { ...user, email: `qa_${Date.now()}@teste.com` };
      cy.criarUsuarioViaUI(dados);
      cy.contains(`Logged in as ${dados.nome}`).should('be.visible');

      cy.contains('a', 'Logout').click();
      cy.url().should('include', '/login');
    });
  });
});
