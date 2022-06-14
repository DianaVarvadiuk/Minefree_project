describe('Create new request',()=>{
    it('Should create new request', ()=>{
       //sign in
        cy.login()
        //click on button new request
        cy.get('div[class*="Sidebar_new_request"] button').click()
        cy.wait(2000)
        //add information about project
        cy.get('form[class*="CreateReport_form"] #mui-6').type('Власенко')
        cy.get('form[class*="CreateReport_form"] #mui-7').type('Василь')
        cy.get('form[class*="CreateReport_form"] #mui-8').type('Іванович')
        cy.get('form[class*="CreateReport_form"] #mui-9').type('0973954654')
        cy.get('div[class*="MuiOutlinedInput"] div').click()
        cy.wait(1000)
        cy.get('ul[class*="MuiList"] li:nth-child(2)').click()
        cy.get('div[class*="GoogleMap_map_wrapper"]').click(5,60)
        cy.wait(1000)
        cy.get('form[class*="CreateReport_form"] #mui-11').click().type('Здвижевка')
        cy.get('form[class*="CreateReport_form"] #mui-12').type('Ракета точка y')
        //upload photo
        const filepath = 'images/rocket_y.jpg'
        cy.get('div[class*="CreateReport_file_wrapper"]').click()
        cy.wait(1000)
        cy.get('input[name="image"]').attachFile(filepath)
        //save data
        cy.get('footer[class*="ReportFooter_footer"] button:nth-child(2)').click()
    })
    
    it('Should check validation data',()=>{
        //sign in
        cy.login()
        //click on button new request
        cy.get('div[class*="Sidebar_new_request"] button').click()
        cy.wait(3000)
        //save data
        cy.get('footer[class*="ReportFooter_footer"] button:nth-child(2)').click()
        cy.get('p[id*="mui-6-helper-text"]').should('be.visible')
        cy.get('p[id*="mui-7-helper-text"]').should('be.visible')
        cy.get('p[class*="MuiFormHelperText"]').contains('Це поле обов\'язково')
        cy.get('p[id*="mui-9-helper-text"]').should('be.visible')
        cy.get('p[id*="mui-10-helper-text"]').should('be.visible')
        cy.get('div[class*="MuiOutlinedInput"] div').parent().next().should('be.visible')
        //close modal fot create new request
        cy.get('button[class*="Modal_close_btn"]').click()
    })
})