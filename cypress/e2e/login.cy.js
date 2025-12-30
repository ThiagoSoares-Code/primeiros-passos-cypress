// cypress/e2e/login.cy.js

describe('Fluxo de Login', () => {
  const selectorsList = {
    usernameField: 'input[name="username"]',
    passwordFiel: 'input[placeholder="Password"]',
    loginButton: 'button[type="submit"]',
    locationDashboard: '.oxd-text--h6'
  }

  it('Deve fazer login com sucesso', () => {
    // Abre a página de login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Preenche os campos de login
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordFiel).type('admin123')

    // Clica no botão de login
    cy.get(selectorsList.loginButton).click()

    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.locationDashboard).contains('Dashboard')
  })

  it('login-fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('test')
    cy.get(selectorsList.passwordFiel).type('test')
    cy.get(selectorsList.loginButton).click()

    cy.get('.oxd-alert-content--error', { timeout: 10000 })
      .should('contain.text', 'Invalid credentials')
  })
})
