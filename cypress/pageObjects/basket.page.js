class BasketPage {
  elements = {
    productItemRow: () => cy.get('mat-row'),
    checkoutButton: () => cy.get('[id="checkoutButton"]'),
    deleteButton: () => ('.cdk-column-remove'),
    plusButton: () => ('[data-cy="plus-button"]'),
    basketItemQuantityLabel: () => ('[data-cy="basket-item-quantity"]')
  }

  openBasketPage() {
    cy.visit('/#/basket')
  }

  deleteProductFromBasketByIndex (productIndex) {
    this.elements.productItemRow().eq(productIndex).find(this.elements.deleteButton()).click()
  }

  deleteProductFromBasketByName(productName) {
    this.elements.productItemRow().contains(productName).find(this.elements.deleteButton()).click()
  }

  increaseProductAmountInBasket(productIndex) {
    this.elements.productItemRow().eq(productIndex).find(this.elements.plusButton()).click()
  }

  getProductQuantity(productIndex) {
    return this.elements.productItemRow().eq(productIndex).find(this.elements.basketItemQuantityLabel())
  }

  clickOnCheckoutButton() {
    this.elements.checkoutButton().click()
  }
}

export default BasketPage
