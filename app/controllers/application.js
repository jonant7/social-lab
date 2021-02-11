import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import firebase from 'firebase/app';

export default class ApplicationController extends Controller {
    @service session;
    @service firebaseApp;
    
    @action
    async login() {
        const auth = await this.get('firebaseApp').auth();
        const provider = new firebase.auth.FacebookAuthProvider();
        return auth.signInWithPopup(provider);
    }

    @action
    active() {
        var user_id = this.get('session.data.authenticated.user.id');
        
        return console.log(user_id);
    }

    @action
    logout() {
        this.session.invalidate();
    }

}
