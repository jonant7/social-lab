import Model, { attr } from '@ember-data/model';
import { action } from '@ember/object';

export default class BrandModel extends Model {
  @attr('string') name;
  @attr('string') _id;

  @action
  getBrand(){
    let brand = store.peekRecord('brand');
    brand.get('id');
    console.log("mARCA "+brand);
  }
}

