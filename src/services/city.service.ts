import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(public http: HttpClient) { }
  getcity(motCle: String, page: number, size: number) {
    return this.http.get(`http://localhost:8080/SpringWeb/city1?motCle=${motCle}&page=${page}&size=${size}`).pipe(
     map(resp => resp));

  }

  getRegion(FilterRegion: String, size: number) {
    return this.http.get(`http://localhost:8080/SpringWeb/city1?FilterRegion=${FilterRegion}&size=100000`).pipe(
     map(resp => resp));

  }
}
