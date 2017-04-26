import { Ng2ComponentsUpgradePage } from './app.po';

describe('ng2-components-upgrade App', () => {
  let page: Ng2ComponentsUpgradePage;

  beforeEach(() => {
    page = new Ng2ComponentsUpgradePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
