import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('Login correcto con usuario válido', () => {
    LoginPage.login('standard_user', 'secret_sauce')
    InventoryPage.isLoaded()
  })

  it('Login incorrecto con contraseña incorrecta', () => {
    LoginPage.login('standard_user', 'wrong_password')
    LoginPage.elements.errorMessage().should('be.visible')
    LoginPage.elements.errorMessage().should('contain', 'Username and password do not match')
  })

  it('Login incorrecto con usuario bloqueado', () => {
    LoginPage.login('locked_out_user', 'secret_sauce')
    LoginPage.elements.errorMessage().should('contain', 'Sorry, this user has been locked out')
  })

  it('Login con campos vacíos', () => {
    LoginPage.elements.loginButton().click()
    LoginPage.elements.errorMessage().should('contain', 'Username is required')
  })
})