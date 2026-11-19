import page from '../pages/AutomationPage';

describe('TC 10 - Verify Subscription in home page', () => {
  it('Deve realizar inscrição na newsletter pelo rodapé da Home', () => {
    page.visitarHome();
    cy.get('footer').scrollIntoView();
    cy.contains('Subscription').should('be.visible');

    cy.get('#susbscribe_email').type(`news_${Date.now()}@teste.com`);
    cy.get('#subscribe').click();

    cy.contains('You have been successfully subscribed!').should('be.visible');
  });
});
