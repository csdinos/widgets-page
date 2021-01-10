describe('Happy case scenario as described in notion', () => {
  it('When I visit the widgets app main page for the first time, then I should get an empty list with a new button', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.widget-card').should('not.exist')
  })

  it('When I click the new button, I should be get the first step of the creation', () => {
    cy.get('#new-widget-btn').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/create/language')
    })
    cy.get('#language-selector').should('be.visible')
  })

  it('When I click the next button without selecting a language, I should get an error', () => {
    cy.get('#error-message').should('not.have.class', 'Mui-error')
    cy.get('#next-btn').click()
    cy.get('#error-message').should('have.class', 'Mui-error')
  })

  it('When I select a language and then click next, I should go to the second step', () => {
    cy.get('#language-selector').click()
    cy.get('.language-selector-item').eq(1).click()

    cy.get('#next-btn').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/create/name')
    })
  })

  it('When I click create without filling in a name, I should get an error', () => {
    cy.get('#error-message').should('not.have.class', 'Mui-error')
    cy.get('#create-btn').click()
    cy.get('#error-message').should('have.class', 'Mui-error')
  })

  it('When I fill in a name and then click create, I should go to the main page with one new widget listed', () => {
    cy.get('#name-text-input').type('Rick and Morty')
    cy.get('#create-btn').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })

    cy.get('.widget-card').should('exist')

    /**
     * Appending the rest of the cases on this test as cypress does not persist the local storage
     * between tests. Normally it should be handled in a different way (make local storage persist)
     * but for this demo I will just proceed like that.
     */

    // when reloading, we should still get the created widget
    cy.reload()
    cy.get('.widget-card').should('exist')

    // on clicking delete, we should get the popup and upon confirming we should be back
    // on the main page without the widget anymore
    cy.get('.delete-btn').click()
    cy.get('#confirm-delete-btn').click()
    cy.get('.widget-card').should('not.exist')

    // upon reloading, the widget should stay deleted
    cy.reload()
    cy.get('.widget-card').should('not.exist')
  })
})