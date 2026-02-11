// cypress/e2e/login.cy.js
import userData from '../fixtures/user-data.json'
import loginPage from '../pages/loginPages.js'
import dashboardPage from '../pages/dashboardPage.js'
import menuPage from '../pages/menuPage.js'

const LoginPage = new loginPage()
const dashboardpage = new dashboardPage()
const menupage = new menuPage()

describe('Fluxo de Login', () => {

  const selectorsList = {
    fistNameField: '[placeholder="First Name"]',
    lastNameField: '[placeholder="Last Name"]',
    genericField: '.oxd-input',
    dateField: 'placeholder="yyyy-dd-mm"',
    dateCloseButton: '.--close',
    genericSelect:'.oxd-select-text--arrow',
    submitButton: '.oxd-button',
  }


  it.only('User Info Update - Success', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardpage.checkdashboardPage()
    menupage.accessMyInfo()

    cy.get(selectorsList.fistNameField).clear().type('Thiago')
    cy.get(selectorsList.lastNameField).clear().type('Soares')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherId')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriverTest')
    cy.get(selectorsList.genericField).eq(7).clear().type('2025-05-09')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericSelect).eq(0).click()
    cy.contains('span', 'American').click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
  })

  it('login-fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()

    cy.get('.oxd-alert-content--error', { timeout: 10000 })
      .should('contain.text', 'Invalid credentials')
  })
})
