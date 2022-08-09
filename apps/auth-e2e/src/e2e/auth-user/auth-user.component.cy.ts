describe('auth', () => {
  beforeEach(() => cy.visit('/iframe.html?id=authusercomponent--primary'));
  it('should render the component', () => {
    cy.get('micro-app-auth-user').should('exist');
  });
});
