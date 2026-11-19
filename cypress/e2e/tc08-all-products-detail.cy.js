import page from '../pages/AutomationPage';

describe('TC 08 - Verify All Products and product detail page', () => {
  it('Deve listar todos os produtos e exibir detalhes do primeiro item', () => {
    page.visitarHome();
    page.irParaProdutos();
    cy.contains('All Products').should('be.visible');
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);

    cy.contains('a', 'View Product').first().click();
    cy.url().should('include', '/product_details/');
    cy.get('.product-information').within(() => {
      cy.get('h2').should('be.visible');
      cy.contains('Category:').should('be.visible');
      cy.contains('Rs.').should('be.visible');
      cy.contains('Availability:').should('be.visible');
      cy.contains('Condition:').should('be.visible');
      cy.contains('Brand:').should('be.visible');
    });
  });
});
