describe('host', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('micro-app-nx-welcome').should('exist');
  });
});
