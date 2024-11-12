//your code here
describe('Bootstrap Button Tests', () => {

  // Test for button-6: Disabled Info Button
  it('should have the correct classes for button-6 (Disabled Info Button)', () => {
    cy.visit(baseUrl + "/main.html");
    
    cy.get("#button-6")
      .should('have.class', 'btn-info')  // Check if the button has the btn-info class
      .and('be.disabled');  // Ensure the button is disabled
  });

  // Test for button-5: Warning Large Full-Screen Width Button
  it('should have the correct classes for button-5 (Warning Large Full-Screen Width Button)', () => {
    cy.visit(baseUrl + "/main.html");

    cy.get("#button-5")
      .should('have.class', 'btn-warning')  // Check if the button has the btn-warning class
      .and('have.class', 'btn-lg')  // Ensure the button is large (btn-lg)
      .and('have.class', 'btn-block');  // Ensure the button takes full width (btn-block)
  });

});
