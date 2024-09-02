describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('we have following test cases'))).toBeVisible();
  });

  it('should show greeting with name', async () => {
    await expect(element(by.text('Hello, Yash!'))).toBeVisible();
  });

  it('should show button with counter', async () => {
    await expect(element(by.text('You pressed 2 times'))).toBeVisible();
  });

  it('should show login form', async () => {
    await expect(element(by.id('username-test-input'))).toBeVisible();
    await expect(element(by.id('password-test-input'))).toBeVisible();
    await expect(element(by.id('login-form-button'))).toBeVisible();
  });

});
