import Model, { attr }  from '@ember-data/model';

export default class InsightModel extends Model {
  @attr('string') _id;
  @attr('number') spend;
  @attr('number') cpc;
  @attr('string') ctr;
  @attr('number') impressions;
  @attr('number') reach;
  @attr('date') date_start;
  @attr('date') date_stop;
}
