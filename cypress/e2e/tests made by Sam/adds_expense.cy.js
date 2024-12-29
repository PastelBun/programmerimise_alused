
it('adds expense', () => {
    cy.visit('http://localhost:3000')
    cy.get('button').should('have.text', 'Add New Expense').click()
    cy.get('.title').type('cypress test')
    cy.get('.amount').type('0.99')
    cy.get('.date').type('2024-02-12')
    cy.get('.submit').as('btn').click({multiple: true})    
})