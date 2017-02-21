import { InternshipSpring2017Page } from './app.po';

describe('internship-spring2017 App', function() {
  let page: InternshipSpring2017Page;

  beforeEach(() => {
    page = new InternshipSpring2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
