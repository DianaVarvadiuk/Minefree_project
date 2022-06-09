describe("Create test for sign in page", () =>{
    it('Should  check sign in', () =>{
       //check valid password 
    cy.get('#mui-1').clear().type('sgsggdg')
    cy.get(' button[type="submit"]').contains("Увійти").click().should("be.visible")
    cy.get('#mui-2-helper-text').invoke('text').should("include","Це поле обов'язково")
    cy.get('#mui-2').clear().type('password')
    cy.get('#mui-2-helper-text').should('have.text','Не меньш 8 символів, одна велика літера, одна маленька, одна цифра та один з символів !@#$%^&*')
    // check sign in via valid email and password
    cy.login()
    })
})