/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import "cypress-localstorage-commands";

Cypress.Commands.add('closeWelcomeBanner', () => {
  cy.get('[aria-label="Close Welcome Banner"]').click()
})

Cypress.Commands.add('loginViaApi', (email, password) => {
  cy.request({
    method: 'POST',
    url: '/rest/user/login',
    headers: {
      'content-type': 'application/json'
    },
    body: {
      email: email,
      password: password,
    },
  }).then((response) => {
    cy.setLocalStorage('token', response.body.authentication.token)
    cy.setLocalStorage('bid', response.body.authentication.bid)
    cy.setCookie('token', response.body.authentication.token)
    sessionStorage.setItem('bid', response.body.authentication.bid)
    })
})
