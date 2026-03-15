import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

describe('Logout', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.login('standard_user', 'secret_sauce')
    InventoryPage.isLoaded()
  })

  it('Logout correcto', () => {
    InventoryPage.logout()
    cy.url().should('eq', 'https://www.saucedemo.com/')
    LoginPage.elements.loginButton().should('be.visible')
  })
})