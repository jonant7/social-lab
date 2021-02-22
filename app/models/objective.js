import Model, { attr } from '@ember-data/model';

export default class ObjectiveModel extends Model {
  @attr('number') _id;
  @attr('string') name;
}
