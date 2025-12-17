// cypress/e2e/login.cy.js

describe('Fluxo de Login', () => {
  it('Deve fazer login com sucesso', () => {
    // Abre a página de login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Preenche os campos de login
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[placeholder="Password"]').type('admin123')

    // Clica no botão de login
    cy.get('button[type="submit"]').click()

    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-text--h6').contains('Dashboard')
  })

  it('login-fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('test')
    cy.get('input[placeholder="Password"]').type('test')
    cy.get('button[type="submit"]').click()

    cy.get('.oxd-alert-content--error', { timeout: 10000 })
      .should('contain.text', 'Invalid credentials')
  })
})
