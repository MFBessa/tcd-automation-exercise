import page from '../pages/AutomationPage';

describe('TC 09 - Search Product', () => {
  it('Deve buscar um produto e exibir resultados relacionados', () => {
    page.visitarHome();
    page.irParaProdutos();
    page.buscarProduto('Top');

    cy.contains('Searched Products').should('be.visible');
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
  });
});
