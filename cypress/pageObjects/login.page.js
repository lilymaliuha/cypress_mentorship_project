class LoginPage {
  elements = {
    loginInputField: () => cy.get('#email'),
    passwordInputField: () => cy.get('#password'),
    loginButton: () => cy.get('#loginButton'),
    loginErrorMessage: () => cy.get('.error').contains('Invalid email or password.'),
  }

  openLoginPage() {
    cy.visit('/#/login');
  }

  login (username, password) {
    this.elements.loginInputField().type(username);
    this.elements.passwordInputField().type(password);
    this.elements.loginButton().click();
  }
}

export default LoginPage;
