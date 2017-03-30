import { Assingment1Page } from './app.po';

describe('assingment1 App', () => {
  let page: Assingment1Page;

  beforeEach(() => {
    page = new Assingment1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
