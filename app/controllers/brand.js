import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BrandController extends Controller {
  @action
    createBrand() {
      var newBrand = this.store.createRecord('brand', {
        name: this.get('name'),
        token: this.get('token'),
      });
      newBrand.save();
    }

}
