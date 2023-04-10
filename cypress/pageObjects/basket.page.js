class BasketPage {
  elements = {
    productItemRow: () => cy.get('mat-row'),
    deleteButton: () => ('.cdk-column-remove'),
  }

  deleteProductFromBasketByIndex (productIndex) {
    this.elements.productItemRow().eq(productIndex).find(this.elements.deleteButton()).click()
  }
}

export default BasketPage
