class OrderSummaryModule {
  elements = {
    checkoutButton: () => cy.get('[id="checkoutButton"]'),
  }

  clickOnCheckoutButton() {
    this.elements.checkoutButton().click();
  }
}

export default OrderSummaryModule;
