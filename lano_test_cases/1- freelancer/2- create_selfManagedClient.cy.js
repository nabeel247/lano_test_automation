describe('Create a "self managed" client & send an invoice', () => {

    it('Sign in', () => {
        cy.viewport(1280, 720)
        cy.visit('https://staging.lano.io/en/login')
        cy.get('#user_email').type('nabeel.ahmed+1578@lano.io')
        cy.get('#user_password').type('Testuser123!') 
        cy.contains('Sign in').click()
    

        // Goto invoices
        cy.get('#side-menu > li:nth-child(7) > a').click()

        // click 'add invoice' button
        cy.get('a.btn.btn-sm.btn-primary.page-heading__btn--disabled').click()

        // click add client
        cy.get('div.add_client.invoice-add-client.invoice-page--add-client').click()

        // click on "+add a new client"
        cy.contains('+ Add new client').click()

        let random_2_digits = Math.floor(Math.random() * 99);
        let random_6_digits = Math.floor(Math.random() * 60000);

        // add Client name
        cy.get('[name="company[name]"]').type('Self created company '+random_2_digits)
        
        // add first name
        cy.get('input#company_contact_people_attributes_0_first_name').type('Self created')

        // add last name
        cy.get('input#company_contact_people_attributes_0_last_name').type('company '+random_2_digits)

        // add email
        cy.get('[name="company[contact_people_attributes][0][email]"]').type('nabeel.ahmed+'+random_6_digits+'@lano.io')

        // add address details
        cy.get('[name="company[location_attributes][address]"]').type('Turmstraße 33')
        cy.get('[name="company[location_attributes][zip]"]').type('10115')
        cy.get('[name="company[location_attributes][city]"]').type('10115')
        cy.get('[name="company[location_attributes][state]"]').type('Berlin')
        cy.get('[data-id="country-code-select"]').click()
        cy.get(':nth-child(85) > a').click()
        cy.get('[name="company[vat_id]"]').type('112233')
        cy.get('[data-action="validator#beforeSubmitting invoices--add-company#submitCompany"]').click()

        cy.wait(300)
        
        // Click 'add item' button 
        cy.get('[data-target="invoices--invoice-items.associationLinkInitial invoices--select-type-form.addDetachedPosition"] > a').click()

        // Add a position title
        cy.get('[data-target="inline-edit.mainInput invoices--position-form.titleInput"]').type('Test position 1')

        
        // get the current date
        var currentDate = new Date();
        var day = currentDate.getDate();
        cy.log(day)

        // click on start date field
        cy.get('[data-target="invoices--position-form.startsOnInput"]').click({
            force: true
          })
        
        // select start date
        cy.contains('.datepicker-dropdown > .datepicker-days > .table-condensed > tbody > tr > td', day).click()
        
        // click on end date field
        cy.get('[data-target="invoices--position-form.endsOnInput"]').click({
          force: true
        })

        // select end date
        cy.contains('.datepicker-dropdown > .datepicker-days > .table-condensed > tbody > tr > td', day).click()

        // Add price
        cy.get('[data-target="invoices--position-form.rateInput"]').type('20')

        // click on 'currecny' field
        cy.get('div.selectize-control.form-field__control.select.required.single').click()
        
        // select currency 'EUR'
        cy.contains('[data-value]', 'EUR').click()

        
        // Click on 'create & send' button
        cy.get('[data-target="invoices--form.saveWithStateButton"]').click()
        
        // click on 'create & send' button for final confirmation step
        cy.get('[data-target="invoices--form.submitModal"]').click()

        // click on 'send' button to send the 'created' invoice
        cy.get('[data-target="invoicing-emails--form.submitButton"]').click()
      })

    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        //used for all application related uncaught expcetion errors
        return false
      })
})