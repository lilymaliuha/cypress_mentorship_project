class BaseToolbarModule {
  elements = {
    basketButton: () => cy.get('[data-cy="open-basket-button"]'),
    searchIcon: () => cy.get('.mat-search_icon-search'),
    searchInput: () => cy.get('.mat-search_field input'),
  }

  searchProduct(productName) {
    this.elements.searchIcon().click();
    this.elements.searchInput().type(productName).type('{enter}');
  }

  openBasketPage() {
    this.elements.basketButton().click();
  }
}

export default BaseToolbarModule;
