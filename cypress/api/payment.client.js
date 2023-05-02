import { ApiClient } from './api.client'

class PaymentClient extends ApiClient {

  addCard (requestBody) {
    return this.request('POST', '/api/Cards', requestBody);
  }
}
export default PaymentClient

