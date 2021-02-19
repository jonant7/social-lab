import Model, { attr }  from '@ember-data/model';

export default class InsightsModel extends Model {
  @attr('number') spend;
  @attr('number') cpc;
  @attr('number') ctr;
  @attr('number') impressions;
  @attr('number') reach;
  @attr('date') date_start;
  @attr('date') date_stop;
}
