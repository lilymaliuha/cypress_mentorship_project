export class UserModel {
  constructor(email, password, securityQuestion, securityQuestionAnswer) {
    this.email = email
    this.password = password
    this.repeatPassword = password
    this.securityQuestion = securityQuestion
    this.securityQuestionAnswer = securityQuestionAnswer
  }

  setEmail(email) {
    this.email = email;

    return this;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getRepeatedPassword() {
    return this.repeatPassword;
  }

  getSecurityQuestion() {
    return this.securityQuestion;
  }

  getSecurityQuestionAnswer() {
    return this.securityQuestionAnswer;
  }
}
