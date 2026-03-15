class CartPage {
  elements = {
    cartItems: () => cy.get('.cart_item'),
    checkoutButton: () => cy.get('[data-test="checkout"]'),
    removeButton: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
    cartQuantity: () => cy.get('.cart_quantity'),
  }

  isLoaded() {
    this.elements.cartItems().should('be.visible')
  }

  removeItem() {
    this.elements.removeButton().click()
  }

  goToCheckout() {
    this.elements.checkoutButton().click()
  }
}

export default new CartPage()