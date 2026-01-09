// cypress/e2e/login.cy.js
import userData from '../fixtures/user-data.json'

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
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordFiel).type(userData.userSuccess.password)

    // Clica no botão de login
    cy.get(selectorsList.loginButton).click()

    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.locationDashboard).contains('Dashboard')
  })

  it('login-fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordFiel).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()

    cy.get('.oxd-alert-content--error', { timeout: 10000 })
      .should('contain.text', 'Invalid credentials')
  })
})
