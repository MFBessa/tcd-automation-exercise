import page from '../pages/AutomationPage';

describe('TC 02 - Login User with correct email and password', () => {
  it('Deve realizar login com credenciais válidas', () => {
    cy.fixture('userData').then((user) => {
      const dados = { ...user, email: `qa_${Date.now()}@teste.com` };
      cy.criarUsuarioViaUI(dados);
      cy.contains('a', 'Logout').click();

      page.visitarHome();
      page.irParaLogin();
      cy.contains('Login to your account').should('be.visible');
      page.fazerLogin(dados.email, dados.senha);
      cy.contains(`Logged in as ${dados.nome}`).should('be.visible');
      cy.deletarConta();
    });
  });
});
