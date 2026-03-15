class InventoryPage {
  elements = {
    productList: () => cy.get('.inventory_list'),
    productItems: () => cy.get('.inventory_item'),
    cartIcon: () => cy.get('.shopping_cart_link'),
    cartBadge: () => cy.get('.shopping_cart_badge'),
    addToCartButton: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    menuButton: () => cy.get('#react-burger-menu-btn'),
    logoutLink: () => cy.get('#logout_sidebar_link'),
  }

  isLoaded() {
    this.elements.productList().should('be.visible')
  }

  addBackpackToCart() {
    this.elements.addToCartButton().click()
  }

  goToCart() {
    this.elements.cartIcon().click()
  }

  logout() {
    this.elements.menuButton().click()
    this.elements.logoutLink().click()
  }
}

export default new InventoryPage()