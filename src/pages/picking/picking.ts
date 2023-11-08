import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { PickingScannedPalletBinPage } from '../picking-scanned-pallet-bin/picking-scanned-pallet-bin';

export interface Config {
  picking: string;
}

@IonicPage()
@Component({
  selector: 'page-picking',
  templateUrl: 'picking.html',
})
export class PickingPage {

  public config : Config;
  public columns : any;
  public rows : any;
  pickingdata: string;
  url:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {

    this.columns = [
      { name: 'Pallet' },
      { name: 'Bin'},
      { name: 'Stgpallet'},
      { name: 'Binpallet'}
      ];
  }

   ionViewDidLoad() : void
  {
  // this.http
  // .get<Config>('../../assets/data/picking.json')
  // .subscribe((data) =>
  // {
  // this.rows = data.picking;
  // });
  
  this.loadData();
  }
  
  loadData(){
         this.http.get('http://pmtest-flow.pispl.in/api/1.0/wmspune/plugin-RFIDService/picking/getPickingData/all')
        .map(res => res.json())
        .subscribe(pickingdata => {
         this.pickingdata = pickingdata.data;
         console.log(pickingdata.data);  
    },err => {
      console.log(err);
    });
  }

  back(){
    this.navCtrl.push(MenuPage);
  }

  scan(){
    this.navCtrl.push(PickingScannedPalletBinPage);
  }
}
