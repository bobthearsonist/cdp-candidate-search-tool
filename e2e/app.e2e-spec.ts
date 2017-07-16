import { CdpCandidateSearchToolPage } from './app.po';

describe('cdp-candidate-search-tool App', () => {
  let page: CdpCandidateSearchToolPage;

  beforeEach(() => {
    page = new CdpCandidateSearchToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
