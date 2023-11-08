import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PutawayPage } from '../putaway/putaway';
//import { HttpClient } from '@angular/common/http';
//import { requestIonicCallback } from 'ionic-angular/umd/util/util';
//import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-putaway-scanned-pallet-to-bin',
  templateUrl: 'putaway-scanned-pallet-to-bin.html',
})
export class PutawayScannedPalletToBinPage {

  putawayPage : any;
  pallet : string;
  bin : string;
  scanData: Array<{bin: string,pallet:string}>;
  //,private _HTTP: HttpClient
  constructor(public navCtrl: NavController,public file:File, public navParams: NavParams) {
    this.putawayPage=PutawayPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PutawayScannedPalletToBinPage');
  }

  putawayOk(data){ 
   // this.updateDB();  
    this.navCtrl.push(this.putawayPage, {
      pallet: this.pallet,
      bin: this.bin
    });
  //console.log(this);
  }

  putawayCancel(){

    this.navCtrl.push(PutawayPage);
   
 }

  // updateDB() {
  //   var file = new File();
  //   this._HTTP.get<Config>('../../assets/data/putawayData.json').subscribe((data) =>
  //   {
  //     data.putawayData.map(obj =>{
  //       if(obj.pallet == this.pallet){
  //         obj.bin = this.bin;
         
  //        // this.pallet.set("pallet",JSON.stringify(pallet));
  //        file.writeFile('../../assets/data/','putawayData.json', JSON.stringify(data),{replace:true});
  //        return obj;
  //        //fs.writeFile(,data);
  //       }
  //     });
  //     console.log(data.putawayData);
  //   });
  //  }
}
