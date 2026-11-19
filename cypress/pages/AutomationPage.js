class AutomationPage {
  visitarHome() {
    cy.visit('/');
    cy.get('body').should('be.visible');
  }

  irParaLogin() {
    cy.contains('a', 'Signup / Login').click();
  }

  fazerLogin(email, senha) {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(senha);
    cy.get('[data-qa="login-button"]').click();
  }

  irParaProdutos() {
    cy.contains('a', 'Products').click();
    cy.url().should('include', '/products');
  }

  buscarProduto(termo) {
    cy.get('#search_product').type(termo);
    cy.get('#submit_search').click();
  }

  adicionarPrimeiroProdutoAoCarrinho() {
    cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
    cy.get('.features_items .add-to-cart').first().click({ force: true });
    cy.contains('button', 'Continue Shopping').click();
  }

  irParaCarrinho() {
    cy.contains('a', 'Cart').first().click();
    cy.url().should('include', '/view_cart');
  }

  finalizarCompra(cartao) {
    cy.contains('a', 'Proceed To Checkout').click();
    cy.get('#address_delivery').should('be.visible');
    cy.get('textarea[name="message"]').type('Pedido automatizado via Cypress.');
    cy.contains('a', 'Place Order').click();

    cy.get('[data-qa="name-on-card"]').type(cartao.nome);
    cy.get('[data-qa="card-number"]').type(cartao.numero);
    cy.get('[data-qa="cvc"]').type(cartao.cvc);
    cy.get('[data-qa="expiry-month"]').type(cartao.mes);
    cy.get('[data-qa="expiry-year"]').type(cartao.ano);
    cy.get('[data-qa="pay-button"]').click();

    cy.get('[data-qa="order-placed"]').should('be.visible');
  }
}

export default new AutomationPage();
