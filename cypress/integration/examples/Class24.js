describe('Aliasing putting alias to web elements ',()=>{

it('iterating over several methods',()=>{

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/');
    cy.get('.search-keyword').type('ca')
    cy.get('.product-image:visible').should('have.length',4)

    // one way that you can use to define weblemenets or a way to reuse some elements that you 
    // already has used before. you can usu aliasing that is put an alias for an element and reuse 
    // in the future

    cy.get('.products').as('WebElementProducts')
    cy.get('@WebElementProducts').find('.product').eq(2).contains('ADD TO CART').click()

    cy.get('@WebElementProducts').find('.product').each(($el, index, $list) => {

        if($el.find('h4.product-name').text().includes('Cashews')){
            cy.wrap($el).find('button').click()
        }
    })

    // also you need always keep in mind that if you are using any JS command that doesnot belog to cypress 
    // that will be execute first, since all the cypress commands are asyncronous commands they will storage and just will 
    // will execute after cypress queue has resolved them, for that reason is better use the js commans into a then(methods)

    // because in that way we assurance that everythin will be executed in the order that we define in our code

    console.log('this will be executed at the beging before execute any step of cypress')
    cy.get('@WebElementProducts').then($el => {

        console.log('here you code will be executed in a secuaencial mode')
        cy.log('here you can see your code in the cypress runner, at the end of your test')
    })

})
})