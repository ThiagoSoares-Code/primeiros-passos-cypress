describe('Orange HRM Test', () => {
  it('login-success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[placeholder="Password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
  })

  it.skip('login-fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('test')
    cy.get('input[placeholder="Password"]').type('test')
    cy.get('button[type="submit"]').click()

    cy.get('.oxd-alert-content--error', { timeout: 10000 })
      .should('contain.text', 'Invalid credentials')
  })
})

