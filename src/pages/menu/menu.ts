import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PutawayPage } from '../putaway/putaway';
import { PickingPage } from '../picking/picking';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  
  
  constructor(public navCtrl: NavController) {

  }
  navigateToPage(pageName: string){
      this.navCtrl.push(PutawayPage);
    }
    navigate(pageName: string){
      this.navCtrl.push(PickingPage);
    }
}
