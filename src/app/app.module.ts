import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { MenuPage } from '../pages/menu/menu';
import { PutawayPage} from '../pages/putaway/putaway';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PickingPage } from '../pages/picking/picking';
import { PickingScannedPalletBinPage } from '../pages/picking-scanned-pallet-bin/picking-scanned-pallet-bin'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PickingPalletPartialToBinPage } from '../pages/picking-pallet-partial-to-bin/picking-pallet-partial-to-bin';
import { PickingPalletPartialToStgPage } from '../pages/picking-pallet-partial-to-stg/picking-pallet-partial-to-stg';
import { PutawayScannedPalletToBinPage } from '../pages/putaway-scanned-pallet-to-bin/putaway-scanned-pallet-to-bin';
//import { DatabaseProvider } from '../providers/database/database';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import { IonicStorageModule } from '@ionic/storage';
import { AuthProvider } from '../providers/auth/auth';
 

@NgModule({
  declarations: [ 
    MyApp,
    LoginPage,
    AboutPage,
    MenuPage,
    PutawayPage,
    HomePage,
    TabsPage,
    PickingPage,
    PickingScannedPalletBinPage,
    PickingPalletPartialToBinPage,
    PickingPalletPartialToStgPage,
    PutawayScannedPalletToBinPage
    ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    NgxDatatableModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AboutPage,
    MenuPage,
    HomePage,
    TabsPage,
    PutawayPage,
    PickingPage,
    PickingScannedPalletBinPage,
    PickingPalletPartialToBinPage,
    PickingPalletPartialToStgPage,
    PutawayScannedPalletToBinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //DatabaseProvider,
    SQLitePorter,
    SQLite,
    AuthProvider
  ]
})
export class AppModule {}
