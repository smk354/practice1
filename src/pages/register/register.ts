import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AngularFireAuth]
})
export class RegisterPage {

  user = {} as User;
  constructor(private afAuth: AngularFireAuth,

    public navCtrl: NavController, public navParams: NavParams, public toastcontroller : ToastController) {
  }

  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      const toast = await this.toastcontroller.create({message : 'Success Registration', duration : 2000});
      toast.present();
      console.log(result);
      this.navCtrl.popTo('LoginPage');
    }
    catch (e) {
      const toast = await this.toastcontroller.create({message : 'Fail Registration', duration : 2000});
      toast.present();
      console.log(e);      
    }
  }
}
