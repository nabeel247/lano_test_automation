describe('Project creation', () => {

    it('Login as a client', () => {
        cy.viewport(1366, 768)
        cy.visit('https://staging.lano.io/en/login')
        cy.get('#user_email').type('nabeel.ahmed+10022@lano.io')
        cy.get('#user_password').type('Testuser123!') 
        cy.contains('Sign in').click()

        // select 1 of the company accounts (currency cloud)
        cy.get(':nth-child(2) > .radio-label').click()
        cy.get('[data-target="employee-company-selection.companyLink"]').click()

    })

    it('Create project', () => {    
      
        let random_2_digits = Math.floor(Math.random() * 99);

        // Goto projects
        cy.get('#side-menu > :nth-child(6) > a').click()

        // click 'add project' button
        cy.get('#breadcrumbs-actions').click()

        // add 'title'
        cy.get('#project-title').type('Test project '+random_2_digits)

        // add 'budget'
        cy.get('[data-target="company-project--form.projectBudget validator.input"]').type('200')

        // selet & click template option
        cy.get('[data-id="template-select"]').click()
        cy.get(':nth-child(14) > a').click()

        // click 'create' button
        cy.get('[type="submit"]').click()
      })

    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        //used for all application related uncaught expcetion errors
        return false
      })
})