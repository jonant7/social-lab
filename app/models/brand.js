import Model, { attr } from '@ember-data/model';

export default class BrandModel extends Model {
  @attr('string') name;
  @attr('string') token;
}
