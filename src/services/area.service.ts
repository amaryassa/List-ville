import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  constructor(public http: HttpClient) { }

  getArea(motCle: String, page: number, size: number) {
    return this.http.get(`http://localhost:8080/SpringWeb/area1?motCle=${motCle}&page=${page}&size=${size}`).pipe(
     map(resp => resp));
  }
}
