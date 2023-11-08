// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { SQLiteObject, SQLite } from '@ionic-native/sqlite';
// import { BehaviorSubject } from 'rxjs';
// //import { IonicStorage } from '@ionic/storage';
// import { SQLitePorter } from '@ionic-native/sqlite-porter';
// import { Platform } from 'ionic-angular/umd';

// @Injectable()
// export class DatabaseProvider {

//   database: SQLiteObject;
//   private databaseReady: BehaviorSubject<boolean>;


//   constructor(public http: HttpClient, private sqlitePorter: SQLitePorter, private storage:Storage, private sqlite: SQLite, private platform: Platform) {
//       this.databaseReady= new BehaviorSubject(false);
//       this.platform.ready().then(() =>{
//         this.sqlite.create({
//           name: 'putawayData.db',
//           location: 'default'
//         })

//         .then((db: SQLiteObject)=>{
//           this.database=db;
//           this.storage.get('database_filled').then(val => {
//             if(val){
//               this.databaseReady.next(true);
//             }else{
//               this.fillDatabase();
//             }
//           })
//         });
//       });
//   }

//   fillDatabase(){
//     this.http.get('assets/putawayData.sql')
//     .map(res => res.text())
//     .subscribe(sql => {
//       this.sqlitePorter.importSqlToDb(this.database, sql)
//       .then(data =>{
//         this.databaseReady.next(true);
//         this.storage.set('database_filled', true);
//       })
//       .catch(e => console.log(e));
//     });
//   }

//   addPutawayData(pallet, stgbin, bin){
//     let data = [pallet, stgbin, bin];
//     return this.database.executeSql("INSERT INTO putawayData(pallet, stgbin, bin VALUES(?, ?, ?)",data);

//   }

//   getAllPutawayData(){

//   return  this.database.executeSql("select * from putawayData", []).then(data =>{
//     let putawayData=[];
//     if(this.database.rows.length > 0){
//       for (var i=0; i < data.rows.length; i++){
//         putawayData.push({pallet:data.rows.item(i).pallet, stgbin:data.rows.item(i).stgbin, bin:data.rows.item(i).bin})
//       }
//     }
//     return putawayData;
//       },err =>{
//         console.log('error: ', err);
//         return [];
        
//     })
//   }
//   getDatabaseState(){
//     return this.databaseReady.asObservable();
//   }

// }

