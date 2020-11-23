describe('store-ui-shared', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary&knob-title=Nx Festival'));

  it('should render the component', () => {
    cy.get('nx-festival-header').should('exist');
  });

  it('should show the title', () => {
    cy.get('nx-festival-header').contains('Nx Festival');
  });
});
