

import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StreetService {

  constructor(public http: HttpClient) { }

  getStreet(motCle: String, page: number, size: number) {
    return this.http.get(`http://localhost:8080/SpringWeb/street1?motCle=${motCle}&page=${page}&size=${size}`).pipe(
     map(resp => resp));

  }

  getStreetFilter(paysFilter: String, size: number) {
    return this.http.get(`http://localhost:8080/SpringWeb/street1?paysFilter=${paysFilter}&size=5000`).pipe(
     map(resp => resp));

  }


}

