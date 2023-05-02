import { ApiClient } from './api.client'

class BasketClient extends ApiClient {

  getBasket (basketId) {
    return this.request('GET', `/rest/basket/${basketId}`);
  }

  addItemsToBasket (requestBody) {
    return this.request('POST', '/api/BasketItems', requestBody);
  }
}
export default BasketClient
