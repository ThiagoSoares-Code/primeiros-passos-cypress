class dashboardPage {
    selectorsList() {
        const selectors = {
            locationDashboard: '.oxd-text--h6'
        }
        return selectors
    }
    checkdashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().locationDashboard).should('be.visible')
    }
}
export default dashboardPage