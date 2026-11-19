import page from '../pages/AutomationPage';

describe('TC 15 - Place Order: Register before Checkout', () => {
  it('Deve cadastrar usuário antes do checkout e concluir o pedido', () => {
    cy.fixture('userData').then((user) => {
      const dados = { ...user, email: `qa_${Date.now()}@teste.com` };
      page.visitarHome();
      cy.criarUsuarioViaUI(dados);
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
