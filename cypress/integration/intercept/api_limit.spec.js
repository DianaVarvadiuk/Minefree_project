describe('Api limit intercept', () =>{
    it('API response', () =>{
    cy.visit('')
    //sign in
    cy.login()
    //intercept  get  API limit
    cy.intercept('GET' ,'/api/v0/report/operator/?limit=10&offset=0&search=',{ fixture: 'interceptFicture.json' }).as('getLimit-Fixtures')
    cy.get('div[class*="MuiTabs"] button:nth-child(1)').should('have.text','Всі 126')
    cy.get('div[class*="MuiTabs"] button:nth-child(2)').should('have.text','Нові 7')
    cy.get('div[class*="MuiTabs"] button:nth-child(3)').should('have.text','Підтверджені 114')
    cy.get('div[class*="MuiTabs"] button:nth-child(4)').should('have.text','Дублікат 3')
    cy.get('div[class*="MuiTabs"] button:nth-child(5)').should('have.text','Відхилені 2')
    cy.get('div[class*="MuiTabs"] button:nth-child(6)').should('have.text','Не знайдені 1')
    cy.get('div[class*="MuiTabs"] button:nth-child(7)').should('have.text','Знайдені 1')
    cy.get('div[class*="MuiTabs"] button:nth-child(8)').should('have.text','Знешкоджені 1')
     })
    
    it('Api get object on the map', () =>{
    cy.visit('')
    //sign in
    cy.login()
    //intercept  get  object on the map
    cy.intercept('GET' ,'/api/v0/report/operator/?limit=10&offset=0&search=',{ fixture: 'interceptFicture.json' }).as('getObjectsMap-Fixtures')
    cy.get('nav[class*="Sidebar_menu"] li:nth-child(2)').click()
    cy.wait(3000)
    cy.get('div[class*="MapWrapper_page_marker_count_wrapper"] div').should('have.text','128 об\'єктів на ділянці')
    })
   })

