import BaseToolbarModule from '../pageObjects/modules/base.toolbar.module'
import ProductsPage from '../pageObjects/products.page'
import BasketPage from '../pageObjects/basket.page'
import { ApiClient } from '../api/api.client'

describe('Basket tests', function () {
  const baseClient = new ApiClient();
  const toolbar = new BaseToolbarModule();
  const productsPage = new ProductsPage();
  const basketPage = new BasketPage();
  const productIndex = 0;

  beforeEach(function () {
    baseClient.authorize();
    productsPage.openProductsPage();
    cy.fixture('testData').then(productData => {
      this.productData = productData
    });
  })

  it('a logged in user should be able to add an item to basket', function () {
    toolbar.searchProduct(this.productData[0].productName);
    productsPage.addProductToBasketByIndex(productIndex);
    toolbar.openBasketPage();

    basketPage.elements.productItemRow().should('have.length', 1);
  })


  it('user should be able to increase the number of items in the basket', function () {
    toolbar.searchProduct(this.productData[0].productName);
    productsPage.addProductToBasketByIndex(productIndex);
    toolbar.openBasketPage();
    basketPage.increaseProductAmountInBasket(productIndex);

    basketPage.getProductQuantity(productIndex).should('contain.text','2');
  })

  afterEach('Clean basket', function () {
    basketPage.openBasketPage();
    basketPage.deleteProductFromBasketByIndex(productIndex);

    basketPage.elements.productItemRow().should('have.length', 0);
  })
})
