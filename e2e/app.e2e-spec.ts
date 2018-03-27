import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('task2 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display settings page', () => {
    page.navigateTo();
    browser.sleep(2000);
    expect(page.getParagraphText()).toEqual('Settings');
  });

  it('should display database ', () => {
    page.navigateTo();
    browser.sleep(2000);
    expect(page.expandDatabase().getText()).toEqual('Database');
  });

  it('should expand database ', () => {
    page.navigateTo();
    page.expandDatabase().click();
    browser.sleep(2000);
  })
});
