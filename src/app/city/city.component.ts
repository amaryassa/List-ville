import { Component, OnInit } from '@angular/core';
import { CityService } from './../../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  pageCity: any;
  dataPage: any;
  motCle: String = '';
  FilterRegion: String = '';
  currentPage: number = 0;
  size: number = 8;
  nombreTotalDepagePagination: number;
  paginationPage: number [] ;
  constructor(public cityService: CityService ) { }






  doSearch() {

    this.cityService.getcity(this.motCle, this.currentPage, this.size)
  .subscribe(data => {
     console.log(data);
    //  this.dataPage = data;

    this.pageCity = data.resultList;
    this.nombreTotalDepagePagination = data.lastPage;
    this.paginationPage = Array.apply(null, {length: this.nombreTotalDepagePagination + 1}).map(Number.call, Number);
    /* if ( this.currentPage > this.nombreTotalDepagePagination ) {
         this.currentPage = 0 ;
    } */
  }, err => {
    console.error(err);
   });
  }
  chercher() {
    this.currentPage = 0;
    this.doSearch();
  }
    goToPage(i: number) {
      this.currentPage = i;
      this.doSearch();
    }

    nextPage() {
      if (this.currentPage < this.nombreTotalDepagePagination) {
        this.currentPage++;
        this.doSearch();
      }
    }

    prevPage() {
        if (this.currentPage > 0) {
          console.log(this.currentPage);
          this.currentPage--;
          this.doSearch();
        }
      }

  ngOnInit() {
    // this.pagePays = 'Amar';
    this.doSearch();

  }

}
