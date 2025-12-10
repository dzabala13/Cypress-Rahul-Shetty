
describe('This is my first test suit', () => {
  it('This is my first test case', () => {
    // here you are overwrite the default configuraiton timeout, since you could need to make a specific configuration 
    // for an specific test case
    Cypress.config('defaultCommandTimeout',10000)
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/');
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    // here we are using a similar sintaxys that is from jquery to select just the elements that are visible
    cy.get('.product-image:visible').should('have.length',4)

  })
})