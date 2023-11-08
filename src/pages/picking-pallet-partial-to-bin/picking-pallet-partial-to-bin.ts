import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PickingPalletPartialToStgPage } from '../picking-pallet-partial-to-stg/picking-pallet-partial-to-stg';


@IonicPage()
@Component({
  selector: 'page-picking-pallet-partial-to-bin',
  templateUrl: 'picking-pallet-partial-to-bin.html',
})
export class PickingPalletPartialToBinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PickingPalletPartialToBinPage');
  }
  ok(){
    this.navCtrl.push(PickingPalletPartialToStgPage);
  }
}
