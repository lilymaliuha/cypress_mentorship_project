declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Create several Todo items via UI
     * @example
     * cy.createDefaultTodos()
     */
    goToAnotherDomain(searchText: string): Chainable<any>
    closeWelcomeBanners(): Chainable<any>
  }
}
