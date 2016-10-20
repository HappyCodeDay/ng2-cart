import { Ng2ShoppingCartPage } from './app.po';

describe('ng2-shopping-cart App', function() {
  let page: Ng2ShoppingCartPage;

  beforeEach(() => {
    page = new Ng2ShoppingCartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
