import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage{

  authForm : FormGroup;
  loading : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController, public loadingCtrl: LoadingController,  private toastCtrl: ToastController,public authProvider: AuthProvider, private fb: FormBuilder) {
  
    this.authForm = fb.group({
		  'username' : [null, Validators.compose([Validators.required ])],
		  'password': [null, Validators.compose([Validators.required])],
		});
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin(value: any):void{
   // console.log(data);
    this.navCtrl.push(MenuPage);
  }

  public signin1(formData) {
    console.log('formData');
      this.showLoader();
        //validate api handling
        this.authProvider.authUser(formData).then((result) => {
          console.log('inside addUser Response');
          console.log(result);
          this.presentToast(result['msg']);
          //this.showPopup("Success", result.msg);
          this.loading.dismiss();
         
          this.navCtrl.push(MenuPage);
        }, (err) => {
          this.loading.dismiss();
          this.presentToast(err);
        });

  }

    showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 8000,
      position: 'bottom',
      dismissOnPageChange: true
    });

toast.onDidDismiss(() => {
  console.log('Dismissed toast');
});

toast.present();
  }

}
