class AddressPage {
  elements = {
    addressRadioButton: () => cy.get('mat-radio-button'),
    continueButton: () => cy.get('.mat-button-wrapper').contains('Continue'),
    deliveryRow: () => cy.get('mat-table mat-row'),
    deliveryTypeRadioButton: () => ('[data-cy="delivery-radio-button"]')
  }

  selectAddressByIndexAndContinue (addressIndex) {
    this.elements.addressRadioButton().eq(addressIndex).click();
    this.elements.continueButton().click();
  }

  selectDeliveryTypeByIndexAndContinue(deliveryIndex) {
    this.elements.deliveryRow().eq(deliveryIndex).find(this.elements.deliveryTypeRadioButton()).click();
    this.elements.continueButton().click();
  }
}

export default AddressPage;
