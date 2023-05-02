import RegistrationPage from '../pageObjects/registration.page'
import { defaultUserObject } from '../support/helpers/test.data.generator'

describe('Registration tests', () => {
  const registrationPage = new RegistrationPage();

  beforeEach(() => {
    cy.closeWelcomeBanners();
    registrationPage.openRegistrationPage();
  })

  it('user should be able to create a new account', () => {
    registrationPage.enterUserRegistrationData(defaultUserObject);
    registrationPage.submitRegistration();

    registrationPage.elements.registrationApprovalMessage().should('be.visible');
  })

  it('user should not be able to create a new account when enter invalid email', () => {
    registrationPage.enterUserRegistrationData(defaultUserObject.setEmail('a'));

    registrationPage.elements.registerButton().should('be.disabled');
  })
})
