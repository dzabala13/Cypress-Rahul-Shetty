
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

    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    // you use get() to get a DOM element, remember that cypress support the CSS selectors
    // when you are using find() is when you want to select a specific child of one node into the DOM
    // the function eq() is usefull when you want to select one of the multiple result that you can get.
    // contains functions help you to find a element using the text of the element


  })
})