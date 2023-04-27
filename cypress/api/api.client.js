export class ApiClient {
  constructor() {
    this.baseUrl = Cypress.config('baseUrl');
    this.token = null;
  }

   authorize() {
      cy.request({
      method: 'POST',
      url: `${this.baseUrl}/rest/user/login`,
      headers: {
        'content-type': 'application/json'
      },
      body: {
        email: Cypress.env('username'),
        password: Cypress.env('password')
      }
    }).then(response => {
      this.token = response.body.authentication.token;
      cy.setLocalStorage('token', response.body.authentication.token)
      cy.setLocalStorage('bid', response.body.authentication.bid)
      cy.setCookie('token', response.body.authentication.token)
      cy.setCookie('language', 'en')
      cy.setCookie('welcomebanner_status', 'dismiss')
      cy.setCookie('cookieconsent_status', 'dismiss')
      sessionStorage.setItem('bid', response.body.authentication.bid)
    })
  }

  request(method, path, data = null) {
    return cy.getLocalStorage('token').then((localStorageData) => {
      this.token = localStorageData
      cy.request({
        method,
        url: `${this.baseUrl}${path}`,
        body: data,
        headers: {
          authorization: `Bearer ${this.token}`,
          'content-type': 'application/json',
        },
      })
    })
  }

  mockApiCall(method, url, data, aliasName) {
    cy.intercept(method, url, {
      statusCode: 200,
      body: data,
      headers: {
        authorization: `Bearer ${this.token}`,
        'content-type': 'application/json',
      }
    }).as(aliasName)
  }
}
