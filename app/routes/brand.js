import Route from '@ember/routing/route';

export default class BrandRoute extends Route {
    model(){
        return this.store.findAll('brand');
        
    }
}
