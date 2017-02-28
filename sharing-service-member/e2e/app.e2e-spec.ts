import { ArunSharedServicePage } from './app.po';

describe('arun-shared-service App', () => {
  let page: ArunSharedServicePage;

  beforeEach(() => {
    page = new ArunSharedServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
