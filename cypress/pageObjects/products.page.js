class ProductsPage {
  elements = {
    addToBasketButton: () => cy.get('[aria-label="Add to Basket"]'),
    productName: () => cy.get('.item-name'),
    addToBasketConfirmationLabel: () => cy.get('.mat-snack-bar-container')
  }

  openProductsPage() {
    cy.visit('/#/')
  }

  addProductToBasketByIndex (productIndex) {
    this.elements.addToBasketButton().eq(productIndex).click()

    this.elements.addToBasketConfirmationLabel().should('be.visible')
    this.elements.addToBasketConfirmationLabel().should('not.exist')
  }
}

export default ProductsPage
