import { ApiClient } from './api.client'

class BasketClient extends ApiClient {

  getAllProducts() {
    return this.request('GET', '/api/Quantitys');
  }

  interceptAllProducts(mockedData, aliasName) {
    return this.mockApiCall('GET', '/api/Quantitys', mockedData, aliasName);
  }
}

export default BasketClient
