import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-option',
  templateUrl: 'option.html'
})
export class OptionPage {
  constructor(public navCtrl: NavController){

  }
  ionViewDidLoad() {
  
  }
  move_to_myPhoto()
  {

  }
  move_to_onoff()
  {
    this.navCtrl.push("OnOffPage");
  }
}