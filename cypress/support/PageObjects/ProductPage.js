import CartPage from "./CartPage"
class ProductPage {


pageValidation(){
    cy.contains('Shop Name').should('be.visible')

}


verifyCardLimit(){
    cy.get('app-card').should('have.length',4)
}

selectProduct(productName){
    cy.get('app-card').filter(`:contains("${productName}")`)
        .then($element => {// is this a promise?ß                   
            cy.wrap($element).should('have.length',1) // what does wrap do?
            cy.wrap($element).contains('button','Add').click()
        })

}

gotoCard(){
    cy.contains('a','Checkout').click()
    return new CartPage()
}

selectFirstProduct(){
    cy.get('app-card').filter('button','Add').click()
}

}export default ProductPage;