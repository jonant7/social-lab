import Route from '@ember/routing/route';

export default class CampaignRoute extends Route {
  model(){

  return this.store.findAll('campaign');
  }
}
