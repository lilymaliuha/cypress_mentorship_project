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
import 'cypress-localstorage-commands'
import 'cypress-file-upload'

Cypress.Commands.add('goToAnotherDomain', (searchText) => {
    const args = { searchText }

    cy.origin('https://docs.cypress.io/', { args }, ({ searchText }) => {
      cy.visit('/guides/getting-started/installing-cypress')
      cy.get('.osano-cm-dialog__close').click()
      cy.get('.DocSearch-Button').click()
      cy.get('.DocSearch-Input').type(searchText)
      cy.get('[id="docsearch-list"]').should('be.visible')
    })
})

Cypress.Commands.add('closeWelcomeBanners', () => {
  cy.setCookie('language', 'en')
  cy.setCookie('welcomebanner_status', 'dismiss')
  cy.setCookie('cookieconsent_status', 'dismiss')
})

