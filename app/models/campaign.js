import Model, { attr, belongsTo } from '@ember-data/model';

export default class CampaignModel extends Model {
  @attr('string') _id;
  @attr('string') name;
  @attr('string') objective;

  @belongsTo('campaign') campaign;


}
