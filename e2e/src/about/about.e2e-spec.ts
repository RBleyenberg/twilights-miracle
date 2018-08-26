import { AboutPage } from './about.po';
import { getCurrentRouteUrl } from '../utils';

describe('About Page', () => {
  let page: AboutPage;

  beforeEach(() => (page = new AboutPage()));

  it('should display main heading', () => {
    page.navigateTo();
    // @ts-ignore
    expect(page.getParagraphText()).toEqual('ERP software gratis - Dare-solutions');
  });

  it('should display "Geting Started" section', () => {
    page.navigateTo();
    page
      .getGettingStarted()
      .isPresent()
      .then(isPresent => expect(isPresent).toBe(true));
  });

  it('first action button should lead to "Features" route', () => {
    page.navigateTo();
    page
      .getActionButton(0)
      .click()
      // @ts-ignore
      .then(() => expect(getCurrentRouteUrl()).toBe('features'));
  });
});
