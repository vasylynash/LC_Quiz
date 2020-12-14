import LoginPage from '../pageobjects/login.page';
import user from '../testData/users';

describe('LOGIN', function () {
  it('TC-001 Successful login as an admin', function () {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    browser.pause(2000);
  });
});
