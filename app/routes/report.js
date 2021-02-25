import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ReportRoute extends Route {
  @service store;

  async model() {
    return {
      'campaign': this.store.findAll('campaign'),
      'brand': this.store.findAll('brand'),
      'insight': this.store.findAll('insight'),
      'objective': this.store.findAll('objective'),
    };
  }
}
