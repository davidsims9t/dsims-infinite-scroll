import { DsimsInfiniteScrollPage } from './app.po';

describe('dsims-infinite-scroll App', function() {
  let page: DsimsInfiniteScrollPage;

  beforeEach(() => {
    page = new DsimsInfiniteScrollPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
