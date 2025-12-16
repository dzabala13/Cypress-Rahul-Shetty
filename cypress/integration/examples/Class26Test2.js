describe('first flow end to end',()=>{

it('test case to select one grocery element',()=>{

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/');
    cy.get('.search-keyword').type('ca')
    cy.get('.product-image:visible').should('have.length',4)

    cy.get('.products').find('.product').each(($el, index, $list) => {

        if($el.find('h4.product-name').text().includes('Cashews')){
            cy.wrap($el).find('button').click()
        }
    }) // remember that . is the simbol which you can use to specify a class in your CSS selector
    cy.get('.cart-icon > img').click() // in a css selector a > is to select a child of the specifyc DOM node.
    cy.get('button').contains('PROCEED TO CHECKOUT').click()
    cy.get('button').contains('Place Order').click()


}) 



})