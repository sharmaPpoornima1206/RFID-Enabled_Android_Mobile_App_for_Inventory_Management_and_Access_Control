import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {

  apiUrl = 'http://pmtest-flow.test.in/api/1.0/wmspune/plugin-RFIDService/auth/login';
 
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }


  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'login/user').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  authUser(data) {

    return new Promise((resolve, reject) => {
      //let headers = new Headers();
      //headers.append('Content-Type', 'application/json');
      var config = {
        headers: {
            'content-type': 'application/json'
        }
    };
      this.http.post(this.apiUrl+'login/user', JSON.stringify(data), config)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }



}