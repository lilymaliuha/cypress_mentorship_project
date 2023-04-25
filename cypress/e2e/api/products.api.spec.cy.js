import { ApiClient } from '../../api/api.client'
import ProductClient from '../../api/product.client'
import ProductsPage from '../../pageObjects/products.page'

describe('Products api tests', function() {
  const baseClient = new ApiClient()
  const productClient  = new ProductClient()
  const productsPage = new ProductsPage()

  before(function () {
   baseClient.authorize()
    cy.fixture('products').then(productData => {
      this.productData = productData
    })
  })

  it('should return all products with correct data', function () {
    productClient.interceptAllProducts( this.productData, 'getAllProducts')
    productsPage.openProductsPage()
    cy.wait('@getAllProducts').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
      expect(interception.response.body).to.deep.equal(this.productData)
    })
  })
})
