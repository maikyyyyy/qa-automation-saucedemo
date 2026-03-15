import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'

describe('Carrito', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.login('standard_user', 'secret_sauce')
    InventoryPage.isLoaded()
  })

  it('Añadir producto al carrito', () => {
    InventoryPage.addBackpackToCart()
    InventoryPage.elements.cartBadge().should('contain', '1')
  })

  it('Eliminar producto del carrito', () => {
    InventoryPage.addBackpackToCart()
    InventoryPage.goToCart()
    CartPage.isLoaded()
    CartPage.removeItem()
    CartPage.elements.cartItems().should('not.exist')
  })

  it('Ir al checkout desde el carrito', () => {
    InventoryPage.addBackpackToCart()
    InventoryPage.goToCart()
    CartPage.isLoaded()
    CartPage.goToCheckout()
    cy.url().should('include', '/checkout-step-one')
  })
})