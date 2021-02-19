import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') _id;
  @attr('string') name;
  @attr('string') email;
  @attr('string') business;
  @attr('string') picture;

  @hasMany('brand') brands;
}
