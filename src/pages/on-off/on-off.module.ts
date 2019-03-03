import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnOffPage } from './on-off';

@NgModule({
  declarations: [
    OnOffPage,
  ],
  imports: [
    IonicPageModule.forChild(OnOffPage),
  ],
})
export class OnOffPageModule {}
