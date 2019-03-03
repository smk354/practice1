import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-on-off',
  templateUrl: 'on-off.html',
})
export class OnOffPage {

  recommand_toggle: boolean = true;
  today_toggle: boolean = true;

  constructor(
    public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
  }
  btnPush()
  {
    
  }
}
//id="io.ionic.starter"