describe('HomePage', () => {
  // beforeEach(() => {
  //   cy.visit('/');
  // });
  it('should() - See the header text', () => {
    cy.visit('/');
    cy.contains('h3', 'Itienary');
  });
  it('should() - Sees items on the page', () => {
    cy.get('.items').should('be.visible');
  });
  it('should() - have multiple items on the page', () => {
    cy.get('.items').should('not.have.length', 1);
    cy.get('.items').should('not.have.length', 2);
  });
  it('should() - have an image within item', () => {
    cy.get('.items').first().find('img').should('be.visible');
  });
  it('should() - have multiple images within item', () => {
    cy.get('.items').first().find('img').should('not.have.length', 1);
  });
});
