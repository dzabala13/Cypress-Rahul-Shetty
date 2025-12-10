//const { default: HomePage } = require("../../support/PageObjects/HomePage")
import HomePage from "../../support/PageObjects/HomePage" 


describe('End to End ecomerce Test', function (){

    before(function(){
        cy.fixture('example').then(function(data){
            /** remember when you are using this, that allow 
             * all the file to access to this variable
             */
            this.data=data
            this.homepage = new HomePage()
        })
    })


    it('submit Order', function(){

        const ProductName = this.data.ProductName
        
        this.homepage.goTo('https://rahulshettyacademy.com/loginpagePractise/')
        const productPage = this.homepage.login(this.data.username,this.data.password)

        productPage.pageValidation()
        productPage.verifyCardLimit()
        productPage.selectProduct(ProductName)
        const cartPage = productPage.gotoCard()
        

    })


})