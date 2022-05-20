/// <reference types="cypress" />
class Login {
  constructor() {
    // Locators

    this.email = '#email';
    this.password = '#password';
    this.submitButton = 'button.btn.btn-default.btn-lg';
    this.url = '/';
    this.resetPassword = 'Reset Password';
    this.resetEmail = 'email';
    this.resetPasswordButton =
      'body > div.container-fluid > div > div > div > div > div.form-section-content > form > button';
    this.termsAndConditions = 'Terms and Conditions';
    this.LearnMore = 'Click here to learn more.';
    this.navMenu = 'org-info';
    this.signout = 'Logout';
    this.customer = 'Customers';
  }

  setLoginEmailAndPasswordUsingApi() {
    cy.request({
      url: 'https://api-qa.remotesf.com/api/v1/users/sign_in',
      method: 'POST',
      form: true,
      body: {
        email: Cypress.env('adminUsername'),
        password: Cypress.env('adminPassword'),
      },
    })
      .then((res) => localStorage.setItem('ngStorage-refresh', JSON.stringify({ token: res.body.refresh_token })))
      .then((res) =>
        localStorage.setItem(
          'ngStorage-currentUser',
          JSON.stringify({ token: res.body.token, id: res.body.user.id, email: res.body.user.email })
        )
      );
  }

  visitPage() {
    cy.visit(this.url);
  }

  urlAssert() {
    cy.url().should('include', '/jobs');
  }

  setLoginEmailAndPassword(paramEmailField, paramPassword) {
    cy.get(this.email).clear().type(paramEmailField);

    cy.get(this.password).clear().type(paramPassword);

    cy.get(this.submitButton).click();
    cy.url().should('include', '/jobs');

    return this;
  }

  resetPass(paramEmailField) {
    cy.contains(this.resetPassword).click();

    cy.get(this.email).clear().type(paramEmailField);

    cy.get(this.resetPasswordButton).click();

    return this;
  }

  showTermsAndConditions() {
    cy.contains(this.termsAndConditions).click();
  }

  showLearnMore() {
    cy.contains(this.LearnMore).click();
  }

  validateEmailPassword(_emailField, _passwordField) {
    //  invalid password , valid email

    //  invalid password , invalid email

    // invalid email , valid password

    // invalid email , invalid password

    // improperly formatted email

    cy.contains('Invalid Email or Password.').should('have.text', 'Invalid Email or Password.');
  }

  loginAssertion() {
    cy.contains(this.customer).should('have.text', 'Customers');
  }

  logout() {
    cy.get(this.navMenu).click();

    cy.contains(this.signout).click();
  }
}

export default Login;
