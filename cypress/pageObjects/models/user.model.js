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

  setPassword(password) {
    this.password = password;

    return this;
  }

  getPassword() {
    return this.password;
  }

  setRepeatedPassword(repeatPassword) {
    this.repeatPassword = repeatPassword;

    return this;
  }

  getRepeatedPassword() {
    return this.repeatPassword;
  }

  setSecurityQuestion(securityQuestion) {
    this.securityQuestion = securityQuestion;

    return this;
  }

  getSecurityQuestion() {
    return this.securityQuestion;
  }

  setSecurityQuestionAnswer(securityQuestionAnswer) {
    this.securityQuestionAnswer = securityQuestionAnswer;

    return this;
  }

  getSecurityQuestionAnswer() {
    return this.securityQuestionAnswer;
  }
}
