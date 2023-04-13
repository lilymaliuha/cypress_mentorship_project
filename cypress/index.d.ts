declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Create several Todo items via UI
     * @example
     * cy.createDefaultTodos()
     */
    closeWelcomeBanner(): Chainable<any>
    loginViaApi(email: string, password: string): Chainable<any>
  }
}
