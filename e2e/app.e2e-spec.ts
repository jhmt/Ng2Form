import { Ng2FormPage } from './app.po';

describe('ng2-form App', function() {
  let page: Ng2FormPage;

  beforeEach(() => {
    page = new Ng2FormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
