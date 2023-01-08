describe('Task creation', () => {

    it('Create a task as a client', () => {
        cy.viewport(1280, 720)
        cy.visit('https://staging.lano.io/en/login')
        cy.get('#user_email').type('nabeel.ahmed+10022@lano.io')
        cy.get('#user_password').type('Testuser123!') 
        cy.contains('Sign in').click()

        // select 1 of the company accounts (currency cloud)
        cy.get(':nth-child(2) > .radio-label').click()
        cy.get('[data-target="employee-company-selection.companyLink"]').click()
        
        let random_2_digits = Math.floor(Math.random() * 99);

        // Goto tasks
        cy.get('#side-menu > li:nth-child(7) > a').click()

        // click 'add task' button
        cy.get('#breadcrumbs-actions').click()

        // click 'project' field
        cy.get('[data-id="task_project_id"]').click()

        // select 'without project'
        cy.get(':nth-child(2) > a > .text').click()

        // add task title 
        cy.get('[data-field-name="Title"]').type('Test task '+random_2_digits)

        // add 'fee' value
        // cy.get('#task_rate').type('20')

        // select template
        cy.get('.task_template_ids > .input-group-wrapper > .dropdown > .btn > .filter-option').click()
        cy.get('.task_template_ids > .input-group-wrapper > .dropdown > .dropdown-menu.open > .open > .dropdown-menu > :nth-child(2) > a').click()

        // click 'create' button
        cy.get('[data-action="company-task--form#validate company-task--form#taskCreated"]').click()
        
      })

    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        //used for all application related uncaught expcetion errors
        return false
      })
})