class OrderCompletionModule {
  elements = {
    confirmationLabel: () => cy.get('.confirmation').contains('Thank you for your purchase!'),
    productName: () => cy.get('mat-row .cdk-column-product')
  }

  isProductPresentInSummary(productName) {
    return this.elements.productName().contains(productName).should('be.visible');
  }
}

export default OrderCompletionModule;
