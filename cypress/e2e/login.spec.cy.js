import LoginPage from '../pageObjects/login.page'
import BaseToolbarModule from '../pageObjects/modules/base.toolbar.module'
import { makeRandomString } from '../support/helpers/test.data.generator'

describe('Login tests', () => {
  const loginPage = new LoginPage();
  const toolbar = new BaseToolbarModule();

  beforeEach(() => {
    cy.closeWelcomeBanners();
    loginPage.openLoginPage();
  })

  it('registered user should be able to login', () => {
    loginPage.login(Cypress.env('username'), Cypress.env('password'));

    toolbar.elements.basketButton().should('be.visible');
  })

  it('unregistered user should receive an error when login', () => {
    loginPage.login('admin123', 'admin123');

    loginPage.elements.loginErrorMessage().should('be.visible');
  })

  it('user should receive an error then enter incorrect password', () => {
    const incorrectPassword = makeRandomString(5);

    loginPage.login(Cypress.env('username'), incorrectPassword);

    loginPage.elements.loginErrorMessage().should('be.visible');

    cy.goToAnotherDomain('Promise');
  })
})
