describe('How to handle dropdowns',()=>{

it('Several ways to handle dropdowns ',()=>{

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
// you can use 'check()' method to select a checkbox
// also if you want you can concat two. validation with and 
// remember that this kind of validation  'be' 'have' is base on chai library
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')


// you can use the method 'uncheck()', 
// also if you want to make a negativa validation you can start the chai validation with 'not' and then make the normal validation
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

// you can pass a list of option to the check method in order to check several options at the same time
// in this case you can the value atrribute for identify the checkbox that you want to check
cy.get('input[type="checkbox"]').check(['option3','option2'])

}) 
})