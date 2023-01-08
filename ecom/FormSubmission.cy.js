describe('visit tricentis & submit fonctact form', () => {
    
it('visit tricentis', () => {
    cy.visit('https://www.tricentis.com/contact-us')    
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('#Reason_for_contacting__c').select('Consulting', {force: true })
    cy.get('#FirstName').type('John', {force: true})
    cy.get('#LastName').scrollIntoView().type('Doe', {force: true}) 
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