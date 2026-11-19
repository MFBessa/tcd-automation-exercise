import page from '../pages/AutomationPage';

describe('TC 16 - Place Order: Login before Checkout', () => {
  it('Deve logar antes do checkout e concluir o pedido', () => {
    cy.fixture('userData').then((user) => {
      const dados = { ...user, email: `qa_${Date.now()}@teste.com` };
      cy.criarUsuarioViaUI(dados);
      cy.contains('a', 'Logout').click();

      page.visitarHome();
      page.irParaLogin();
      page.fazerLogin(dados.email, dados.senha);
      cy.contains(`Logged in as ${dados.nome}`).should('be.visible');

      page.irParaProdutos();
      page.adicionarPrimeiroProdutoAoCarrinho();
      page.irParaCarrinho();

      page.finalizarCompra({
        nome: 'Jose Bessa',
        numero: '4111111111111111',
        cvc: '123',
        mes: '12',
        ano: '2029',
      });

      cy.deletarConta();
    });
  });
});
