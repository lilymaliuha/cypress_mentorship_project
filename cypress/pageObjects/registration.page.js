class RegistrationPage {
  elements = {
    emailInput: () => cy.get('[aria-label="Email address field"]'),
    passwordInput: () => cy.get('[id="passwordControl"]'),
    repeatPasswordInput: () => cy.get('[id="repeatPasswordControl"]'),
    securityQuestionDropDown: () => cy.get('[name="securityQuestion"]'),
    securityQuestionOption: () => cy.get('[aria-label="Selection list for the security question"] mat-option'),
    securityQuestionAnswerInput: () => cy.get('[id="securityAnswerControl"]'),
    registerButton: () => cy.get('[id="registerButton"]'),
    registrationApprovalMessage: () => cy.get('span').contains('Registration completed successfully.')
  }

  openRegistrationPage() {
    cy.visit('/#/register')
  }

  enterUserRegistrationData(userToRegister) {
    this.elements.emailInput().type(userToRegister.getEmail())
    this.elements.passwordInput().type(userToRegister.getPassword())
    this.elements.repeatPasswordInput().type(userToRegister.getRepeatedPassword())
    this.elements.securityQuestionDropDown().click()
    this.elements.securityQuestionOption().contains(userToRegister.getSecurityQuestion()).click()
    this.elements.securityQuestionAnswerInput().type(userToRegister.getSecurityQuestionAnswer())
  }

  submitRegistration() {
    this.elements.registerButton().click()
  }
}

export default RegistrationPage;
