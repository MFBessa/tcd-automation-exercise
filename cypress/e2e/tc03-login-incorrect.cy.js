import page from '../pages/AutomationPage';

describe('TC 03 - Login User with incorrect email and password', () => {
  it('Deve exibir mensagem de erro ao tentar login inválido', () => {
    page.visitarHome();
    page.irParaLogin();
    cy.contains('Login to your account').should('be.visible');
    page.fazerLogin(`invalido_${Date.now()}@teste.com`, 'SenhaErrada999');
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});
