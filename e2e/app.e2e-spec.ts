import { WtTrainingAngularjsNgcliPage } from './app.po';

describe('wt-training-angularjs-ngcli App', () => {
  let page: WtTrainingAngularjsNgcliPage;

  beforeEach(() => {
    page = new WtTrainingAngularjsNgcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
