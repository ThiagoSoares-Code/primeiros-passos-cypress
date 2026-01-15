// cypress/e2e/login.cy.js
import userData from '../fixtures/user-data.json'

describe('Fluxo de Login', () => {

  const selectorsList = {
    usernameField: 'input[name="username"]',
    passwordFiel: 'input[placeholder="Password"]',
    loginButton: 'button[type="submit"]',
    locationDashboard: '.oxd-text--h6',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    fistNameField: '[placeholder="First Name"]',
    lastNameField: '[placeholder="Last Name"]',
    genericField: '.oxd-input',
    dateField: 'placeholder="yyyy-dd-mm"',
    dateCloseButton: '.--close',
    submitButton: '.oxd-button'
  }


  it.only('User Info Update - Success', () => {
    // Abre a página de login
    cy.visit('/auth/login')

    // Preenche os campos de login
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordFiel).type(userData.userSuccess.password)

    // Clica no botão de login
    cy.get(selectorsList.loginButton).click()

    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.locationDashboard).contains('Dashboard')

    // Clicar no botão myInfo
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.fistNameField).clear().type('Thiago')
    cy.get(selectorsList.lastNameField).clear().type('Soares')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherId')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriverTest')
    cy.get(selectorsList.genericField).eq(7).clear().type('2025-05-09')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
  })

  it('login-fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordFiel).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()

    cy.get('.oxd-alert-content--error', { timeout: 10000 })
      .should('contain.text', 'Invalid credentials')
  })
})
