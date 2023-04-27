import { ApiClient } from './api.client'

class AddressClient extends ApiClient {

  addAddress (requestBody) {
    return this.request('POST', '/api/Addresss/', requestBody)
  }
}
export default AddressClient
