describe('Grabbing the txt for validations usign cypress text command',()=>{

it('iterating over several methods',()=>{

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/');
    cy.get('.search-keyword').type('ca')
    cy.get('.product-image:visible').should('have.length',4)
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    cy.get('.products').find('.product').each(($el, index, $list) => {

        if($el.find('h4.product-name').text().includes('Cashews')){
            cy.wrap($el).find('button').click()
        }
    })


    // here we are doing several actions, the first one is use the method each(($el, index, $list), for etariting over 
    // and iterable object in java script in that way we can perform especific actions over each of elements of 
    // that list 


    // also the funtion text() that help you to get the text of an specific element

    //the method include() that help you to validate if an element contains any substring 

    //cy.warp() it is use for resolving the promise of element $el and allow us to perfomn action over that object

}) 



})