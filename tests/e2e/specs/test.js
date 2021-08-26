describe('HomePage', () => {
  // beforeEach(() => {
  //   cy.visit('/');
  // });
  it('should() - See the header text', () => {
    cy.visit('/');
    cy.contains('h3', 'Itienary');
  });
  it('should() - Sees upload button', () => {
    cy.get('.upload-btn').should('be.visible');
  });
});
