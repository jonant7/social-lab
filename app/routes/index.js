import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return {
      'campaign': this.store.findAll('campaign'),
      'brand': this.store.findAll('brand'),
    };
  }
}
