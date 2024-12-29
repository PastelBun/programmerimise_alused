

it('opens the website', () => {
    cy.visit('http://localhost:3000')
    cy.get('select').select('2025')
    cy.get('select').select('2026')
    cy.get('select').select('2024')
    cy.get('select').select('2023')
})