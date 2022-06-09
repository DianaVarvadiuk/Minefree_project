Cypress.Commands.add('login', () => { 
    const email = Cypress.env('email')
    const password = Cypress.env('password')
    cy.visit("")
	cy.get('#mui-1').clear().type(email)
	cy.get('#mui-2').clear().type(password)
	cy.get(' button[type="submit"]').contains("Увійти").click()


})