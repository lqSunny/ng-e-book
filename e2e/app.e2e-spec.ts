import { NgEBookPage } from './app.po';

describe('ng-e-book App', () => {
  let page: NgEBookPage;

  beforeEach(() => {
    page = new NgEBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
