describe('How to handle Checkboxes and dropdowns',()=>{

it('Several ways to handle Checkboxes and dropdowns ',()=>{

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//------------------------- dynamic checkboxes--------------------
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

//------------------------- static dorpdowns--------------------

// when you have static dropdown you cna use the method select() to select a specific value of a dropwdown 
cy.get('#dropdown-class-example').select('option1').should('have.value','option1')






//------------------------- dynamic dorpdowns--------------------

// when you have a dynamic dropdown, in which you type somehting and you get a list base on you just typed
// in this case you can use the method each(), to iterate over all the option that you hava avaible
// remember that you can use each method to perform actions after cypress solve the get method for and element

cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item div').each(($el, index, $list) => {

    //  remember that text does not belong to cypres, but you can use it into the each method 
    // since you are iterating over each of those elements
    if($el.text()==='India'){

        $el.click()
    }
})

cy.get('#autocomplete').should('have.value','India')

}) 
})