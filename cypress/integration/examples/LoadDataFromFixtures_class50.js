describe('This is my first test suit', () => {

    /** here we are using the hook before use the data that we define in the 
     * fixutre that allows to have all the data for all the test cases that we have in this test suit
     */

    before(function(){
        cy.fixture('example').then(function(data){
            /** remember when you are using this, that allow 
             * all the file to access to this variable
             */
            this.data=data
        })
    })


  it('This is my first test case', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/');
  })
})