import BasePage from './BasePage';

class LoginPage extends BasePage {
  get inputEmail () {
    return $('#normal_login_email');
  }

  get inputPassword () {
    return $('#normal_login_password');
  }

  get btnSubmit () {
    return $('button[type="submit"]');
  }

  login (email, password) {
    this.inputEmail.setValue(email);
    this.inputPassword.setValue(password);
    this.btnSubmit.click();
  }

  open () {
    return super.open('user/login');
  }
}

module.exports = new LoginPage();
