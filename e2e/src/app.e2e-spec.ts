import { AppPage } from './app.po';

import { getCurrentRouteUrl } from './utils';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => (page = new AppPage()));

  it('should redirect to "about" route', () => {
    page.navigateTo();
    // @ts-ignore
    expect(getCurrentRouteUrl()).toEqual('about');
  });

  it('should display current year in the footer', () => {
    page.navigateTo();
    // @ts-ignore
    expect(page.getCurrentYear()).toEqual(new Date().getFullYear().toString());
  });

  it('should have "About", "Features", "Modules" menus', () => {
    page.navigateTo();
    page
      .getAllMenus()
      .then(menus => expect(menus).toEqual(['About', 'Features', 'Modules']));
  });
});
