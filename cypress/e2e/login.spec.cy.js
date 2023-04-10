import LoginPage from '../pageObjects/login.page'
import BaseToolbarModule from '../pageObjects/modules/base.toolbar.module'

describe('Login tests', () => {
  beforeEach(() => {
    cy.visit('/#/login')
    cy.closeWelcomeBanner()
  })

  it('registered user should be able to login', () => {
    const loginPage = new LoginPage()
    const toolbar = new BaseToolbarModule()

    loginPage.login(Cypress.env('username'), Cypress.env('password'))

    toolbar.elements.basketButton().should('be.visible')
  })

  it('unregistered user should receive an error when login', () => {
    const loginPage = new LoginPage()

    loginPage.login('admin123', 'admin123')

    loginPage.elements.loginErrorMessage().should('be.visible')
  })
})
