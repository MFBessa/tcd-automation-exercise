import page from '../pages/AutomationPage';

describe('TC 01 - Register User', () => {
  it('Deve cadastrar e excluir um novo usuário com sucesso', () => {
    cy.fixture('userData').then((user) => {
      const dados = { ...user, email: `qa_${Date.now()}@teste.com` };
      page.visitarHome();
      cy.criarUsuarioViaUI(dados);
      cy.contains(`Logged in as ${dados.nome}`).should('be.visible');
      cy.deletarConta();
    });
  });
});
