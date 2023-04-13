import BaseToolbarModule from '../pageObjects/modules/base.toolbar.module'
import ProductsPage from '../pageObjects/products.page'
import BasketPage from '../pageObjects/basket.page'

describe('Basket tests', function () {
  beforeEach(function () {
    cy.loginViaApi(Cypress.env('username'), Cypress.env('password'))
    cy.visit('/#/search')
    cy.closeWelcomeBanner()
    cy.fixture('productData').then(productData => {
      this.productData = productData
    })
  })

  it('a logged in user should be able to add an item to basket', function () {
    const toolbar = new BaseToolbarModule()
    const productsPage = new ProductsPage()
    const basketPage = new BasketPage()

    toolbar.searchProduct(this.productData.productName)
    productsPage.addProductToBasketByIndex(0)
    toolbar.openBasketPage()

    basketPage.elements.productItemRow().should('have.length', 1)
  })

  afterEach('Clean basket', function () {
    const basketPage = new BasketPage()

    cy.visit('/#/basket')
    basketPage.deleteProductFromBasketByIndex(0)

    basketPage.elements.productItemRow().should('have.length', 0)
  })
})
