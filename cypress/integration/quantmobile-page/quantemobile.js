describe("Check Request and Maps",()=>{
      it.only('Should check menu request and maps change color',() =>{
        //sign in
        cy.login()
        //check focus Request
        cy.get('nav[class*="Sidebar_menu"] a[aria-current="page"]').focus().should('have.css', 'color','rgb(57, 73, 171)')
          //check focus Maps
        //   cy.get('li:nth-child(2) a[class*="Sidebar_link"] ').focus().should('have.css', 'color')
        //   .and('eq','rgb(176, 176, 176)')
        //check color after click Request
        cy.get('nav[class*="Sidebar_menu"] a[aria-current="page"]').click().should('have.css', 'color','rgb(57, 73, 171)')
        cy.get('nav[class*="Sidebar_menu"] a[class*="Sidebar_active"]').click().should('have.css','border-left','5px solid rgb(57, 73, 171)').blur()
        cy.get('li:nth-child(2) a').should('have.css', 'color')
         .and('eq','rgb(176, 176, 176)')
        //check color after click Maps
        cy.get('nav[class*="Sidebar_menu"] li:nth-child(2) a[class*="Sidebar_link"]').trigger("click").should('have.css', 'color')
        .and('eq','rgb(176, 176, 176)')
        cy.get('nav[class*="Sidebar_menu"] li:nth-child(2)  a[class*="Sidebar_link"]').trigger('mouseover')
        .click()
        cy.get('nav[class*="Sidebar_menu"] li:nth-child(2)  a[class*="Sidebar_link"]').should('have.css','border-left','5px solid rgb(57, 73, 171)');
        cy.get('nav[class*="Sidebar_menu"] a[aria-current="page"]').should('have.css', 'color')
        .and('eq','rgb(57, 73, 171)')

        cy.get('div[class*="styles_profile"] ').click()
        cy.wait(1000)
        cy.get('ul[class*="MuiMenu-list"] li:nth-child(3)').click()
    })

    it('Should check find name,surmane and phone',() =>{
        //sign in
        cy.login()
        //find name and surname
        cy.get('#mui-3').type('Сергій  Степаненко {enter}')
        cy.wait(3000)
        cy.get('table[class*="MuiTable"] tbody tr td:nth-of-type(4)').each(($e1) => {
        expect($e1).to.be.visible
        expect($e1).to.have.text('Сергій  Степаненко')
          })
        })
    it('Should check find name,surmane and phone',() =>{
        //sign in
        cy.login()
        //find name and surname
        cy.get('#mui-3').type('+380991568044 {enter}')
        cy.wait(1000)
        cy.get('table[class*="MuiTable"] tbody tr td:nth-of-type(5)').each(($e1) => {
        expect($e1).to.be.visible
        expect($e1).to.have.text('+380991568044')
            })
            })
    
    it('Should check find number report and open him modal',() =>{
        //sign in
        cy.login()
        //find report
        cy.get('#mui-3').clear().type('MF-002244{enter}')
        cy.wait(1000)
        //open modal with this number
        cy.get('table[class*="MuiTable"] tbody tr th').click()
        //close modal
        cy.get('div[class*="Modal_modal"] button[class*="Modal_close"]').click()
    })
    it('Should check if table datas is the same in modal',() =>{
         //sign in
         cy.login()
         //get status
        cy.get('table[class*="MuiTable"] tbody tr ').first().then(($e1) => {
            expect($e1).to.be.visible
            cy.wrap($e1.find('td:nth-of-type(6)')).then(($status) =>{
                expect($status).to.have.text('Підтверджений')
                //click first report
                cy.get('#mui-3').clear().type('MF-002244{enter}')
                cy.wait(1000)
                //open modal with this number
                cy.get('table[class*="MuiTable"] tbody tr th').click()
                //check if  status is correct
                cy.get('header[class*="Report_header"] button').should('include.text',$status.text())
                //close modal
                cy.get('div[class*="Modal_modal"] button[class*="Modal_close"]').click()
            })
        
        cy.wrap($e1.find('td:nth-of-type(4)')).then(($applicant) =>{
            expect($applicant).to.have.text('Сергій  Степаненко')
            // //click first report
            cy.get('#mui-3').clear().type('MF-002244{enter}')
            cy.wait(1000)
            //open modal with this number
            cy.get('table[class*="MuiTable"] tbody tr th').click()
            //check if applicant is correct
            cy.get('div[class*="Report_description_item"]:nth-child(5)').should('include.text',$applicant.text())
            //close modal
            cy.get('div[class*="Modal_modal"] button[class*="Modal_close"]').click()
        })

        cy.wrap($e1.find('td:nth-of-type(5)')).then(($phone) =>{
            expect($phone).to.have.text('+380954260382')
            // //click first report
            cy.get('#mui-3').clear().type('MF-002244{enter}')
            cy.wait(1000)
            //open modal with this number
            cy.get('table[class*="MuiTable"] tbody tr th').click()
            //check if applicant is correct
            cy.get('div[class*="Report_description_item"]:nth-child(6)').should('include.text',$phone.text())
            //check if photo object is visable
            cy.get('div[class*="ReportView_view"] button:nth-child(1)').click()
            cy.get('div[class*="ReportView_view"] img').should('be.visible')
            // check if mapa is visable
            cy.get('div[class*="ReportView_view"] button:nth-child(2)').click()
            cy.get('div[class*="ReportView_view"] img').should('be.visible')
            //close modal
            cy.get('div[class*="Modal_modal"] button[class*="Modal_close"]').click()
        })
           
    })
        
    })
})

