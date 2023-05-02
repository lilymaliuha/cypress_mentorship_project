class PaymentPage {
  elements = {
    paymentCardRadioButton: () => cy.get('[data-cy="payment-method-radio-button"]'),
    continueButton: () => cy.get('.mat-button-wrapper').contains('Continue'),
  }

  selectPaymentCardByIndexAndContinue (cardIndex) {
    this.elements.paymentCardRadioButton().eq(cardIndex).click();
    this.elements.continueButton().click();
  }
}

export default PaymentPage;
