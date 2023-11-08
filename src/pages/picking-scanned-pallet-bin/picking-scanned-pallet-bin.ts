import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PickingPalletPartialToBinPage } from '../picking-pallet-partial-to-bin/picking-pallet-partial-to-bin';
import { AlertController } from 'ionic-angular';
import { PickingPage } from '../picking/picking';

@IonicPage()
@Component({
  selector: 'page-picking-scanned-pallet-bin',
  templateUrl: 'picking-scanned-pallet-bin.html',
})
export class PickingScannedPalletBinPage {
  pallet: any;
  bin: any;
  // errorCheck : boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    
  }

    showAlert() {
    const alert = this.alertCtrl.create({
      title: 'ERROR!',
      subTitle: 'BIN IS NOT SCANNED, PLEASE ENTER CORRECT BIN AND REPORT TO WAREHOUSE SUPERVISOR!',
      buttons: ['OK'],
      cssClass: 'alertDanger'
      });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PickingScannedPalletBinPage');
    // this.errorCheck = false;
    // console.log(this.errorCheck);
  }
  errorCheck(){
    alert('87654');
    if(!this.pallet || !this.bin){
      return false;
      }
      else{
        return true;
      }
  }
  pickingOk(){

    if(!this.pallet || !this.bin){
      // this.errorCheck = true;
        this.errorCheck();
      }
      else{
        this.errorCheck();
         this.navCtrl.push(PickingPalletPartialToBinPage);
      }
    }

    pickingCancel(){

         this.navCtrl.push(PickingPage);
        
      }

}


