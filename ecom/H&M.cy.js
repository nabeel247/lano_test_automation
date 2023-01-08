describe('Visti H&M store and add article to the basket', () => {

 /*   
    it('visit H&M store', () => {
        cy.session(sv, () => {
        cy.viewport(1440, 1080)
        cy.visit('https://www2.hm.com/de_de/index.html')    

        cy.get('#onetrust-accept-btn-handler').click()
        cy.get(':nth-child(2) > .CTA-module--large__P5b7N').trigger('mouseenter')
        cy.get('body > hm-header > div > header > nav > div.Header-module--visibleDesktop__m4naX > div > div.Navigation-module--navigation__eLHcP > ul > li:nth-child(2) > div > ul > li:nth-child(1) > ul > li:nth-child(2) > a').click()
        cy.get(':nth-child(1) > .hm-product-item > .image-container > .item-link > .item-image').click()
        cy.get('.trigger-button').click()
        cy.get('[data-code="1021953012003"]').click()
        cy.get('[data-testid="pdp_add_to_cart_button"]').click({force: true})
       // cy.get('.MiniCart-module--navItem__vF4od').click()
        
        
    }) 
})*/
    
it('visit tricentis', () => {
    
    cy.visit('https://www.tricentis.com/contact-us')    
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('#Reason_for_contacting__c').select('Consulting', {force: true })
    cy.get('#FirstName').type('John', {force: true})
    cy.get('#LastName').type('Doe', {force: true})
    cy.get('#Country').select('Germany', { force: true })
    cy.get('#Phone').type('+4915555555555', {force: true})
    cy.get('#Company').type('Test Case Company', {force: true})
    cy.get('#Email').type('test@test.io', {force: true})
    cy.get('#Role__c').select('Student', { force: true })
    cy.get('#Interested_in_Learning_About__c').select('SAP testing', { force: true })
    cy.get('#Contact_Me_Details__c').type('You can contact me on a Friday :)', {force: true})
    cy.get('#emailOptin').check( { force: true })
    cy.get('button.mktoButton').click({force: true})

})
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        //used for all application related uncaught expcetion errors
        return false
      }) 
})