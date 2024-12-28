
it('opens the website', () => {
    cy.visit('http://localhost:3000')
}),
it('fills out the form with expense data', ()=>{
    cy.get('new-expense__controls> input:first').type('cypress test')
    cy.get('new-expense__controls> input:second').type('0.99')
    cy.get('new-expense__controls> input:third').type('12.02.2026')
}),
it("presses add expense button", () => {
    cy.get('new-expense__actions > button').click()
})