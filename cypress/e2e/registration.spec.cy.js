import RegistrationPage from '../pageObjects/registration.page'
import { defaultUserObject } from '../support/helpers/test.data.generator'

describe('Registration tests', () => {
  beforeEach(() => {
    cy.visit('/#/register')
    cy.closeWelcomeBanner()
  })

  it('user should be able to create a new account', () => {
    const registrationPage = new RegistrationPage()

    registrationPage.enterUserRegistrationData(defaultUserObject)
    registrationPage.submitRegistration()

    registrationPage.elements.registrationApprovalMessage().should('be.visible')
  })

  it('user should not be able to create a new account when enter invalid email', () => {
    const registrationPage = new RegistrationPage()

    registrationPage.enterUserRegistrationData(defaultUserObject.setEmail('a'))

    registrationPage.elements.registerButton().should('be.disabled')
  })
})
