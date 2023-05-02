import BasketClient from '../api/basket.client'
import ProductClient from '../api/product.client'
import BasketPage from '../pageObjects/basket.page'
import AddressPage from '../pageObjects/address.page'
import PaymentPage from '../pageObjects/payment.page'
import OrderSummaryModule from '../pageObjects/modules/order.summary.module'
import OrderCompletionModule from '../pageObjects/modules/order.completion.module'
import { ApiClient } from '../api/api.client'
import AddressClient from '../api/address.client'
import PaymentClient from '../api/payment.client'
import { testCyThen } from '../support/helpers/test.data.generator'

describe('Order tests', function () {
  const baseClient = new ApiClient();
  const basketClient = new BasketClient();
  const productClient = new ProductClient();
  const addressClient = new AddressClient();
  const paymentClient = new PaymentClient();
  const basketPage = new BasketPage();
  const addressPage = new AddressPage();
  const paymentPage = new PaymentPage();
  const orderSummaryModule = new OrderSummaryModule();
  const orderCompletionModule = new OrderCompletionModule();
  let productId;
  let basketId;

  before(function () {
    cy.fixture('testData').then(testData => {
      this.testData = testData
    });
   baseClient.authorize();
   productClient.getAllProducts()
      .then((products) => {
        productId = products.body.data[0].ProductId.toString()
      }).then(() => {
        cy.getLocalStorage('bid').then((localStorageData) => {
          basketId = localStorageData
        }).then(() => {
          basketClient.addItemsToBasket({ ProductId: productId, BasketId: basketId, quantity: 1 }).then(response => {
          })
          addressClient.addAddress(this.testData[1])
          paymentClient.addCard(this.testData[2])
        })
      })
    basketPage.openBasketPage();
  })


  it('user should be able to make an order', function () {
    basketPage.clickOnCheckoutButton();
    addressPage.selectAddressByIndexAndContinue(0);
    addressPage.selectDeliveryTypeByIndexAndContinue(0);
    paymentPage.selectPaymentCardByIndexAndContinue(0);
    orderSummaryModule.clickOnCheckoutButton();

    orderCompletionModule.elements.confirmationLabel().should('be.visible');
    })
})
