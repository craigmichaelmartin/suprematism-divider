import { SuprematismDividerPage } from './app.po';

describe('suprematism-divider App', () => {
  let page: SuprematismDividerPage;

  beforeEach(() => {
    page = new SuprematismDividerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
