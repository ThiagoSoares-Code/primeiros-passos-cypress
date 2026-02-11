class loginPage {
    selectorsList() {
        const selectors = {
            usernameField: 'input[name="username"]',
            passwordField: 'input[placeholder="Password"]',
            loginButton: 'button[type="submit"]'
        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('/auth/login')
    }
    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default loginPage