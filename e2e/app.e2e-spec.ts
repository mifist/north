import { NorthPage } from './app.po';

describe('north App', () => {
  let page: NorthPage;

  beforeEach(() => {
    page = new NorthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
