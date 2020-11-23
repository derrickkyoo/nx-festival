describe('store-ui-shared', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary&knob-title='));

  it('should render the component', () => {
    cy.get('nx-festival-header').should('exist');
  });
});
