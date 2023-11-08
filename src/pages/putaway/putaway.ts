import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { PutawayScannedPalletToBinPage } from '../putaway-scanned-pallet-to-bin/putaway-scanned-pallet-to-bin';

export interface Config {
	putawayData: string;
}


@IonicPage()
@Component({
  selector: 'page-putaway',
  templateUrl: 'putaway.html',
})
export class PutawayPage {

  public config : Config;
  public columns : any;
  public rows : any;
  scanData :any;

  //scanData: Array<{bin: string,pallet:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _HTTP: HttpClient) {
    this.scanData = [];
    this.columns = [
      { name: 'Pallet' },
      { name: 'Stagingbin' },
      { name: 'Bin' }
      ];

    //  console.log(this.navParams.data);

     this.scanData= this.navParams.data;

  }

 
ionViewDidLoad() : void
{
    this._HTTP
    .get<Config>('../../assets/data/putawayData.json')
    .subscribe((data) =>
{
  this.rows = data.putawayData;
});


}

back(){
  this.navCtrl.push(MenuPage);
}
scan(){
  this.navCtrl.push(PutawayScannedPalletToBinPage);
}
}
