import { Component, OnInit } from '@angular/core';
import { StreetService } from './../../services/street.service';

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent implements OnInit {
  pageStreet: any;
  dataPage: any;
  currentPage: number = 0;
  motCle: String = '';
  paysFilter: String = '';
  size: number = 8;
  nombreTotalDepagePagination: number;
  paginationPage: number [] ;

  constructor(public streetService: StreetService ) { }

  chercherPays() {
    this.doSearchPays();
  }

  doSearchPays() {

    this.streetService.getStreetFilter(this.paysFilter, this.size)
  .subscribe(data => {
    // console.log(this.paysFilter);

    //  console.log("data " , data.resultList);
    // let dataFilter = data.resultList;
   data.resultList.filter(el => console.log(el.streetCity.cityArea.areaCountry.codeIso) );

    //  this.dataPage = data;
    // sentence.includes(word)
    this.pageStreet = data.resultList;
    this.nombreTotalDepagePagination = data.lastPage;
    this.paginationPage = Array.apply(null, {length: this.nombreTotalDepagePagination + 1}).map(Number.call, Number);

  }, err => {
    console.error(err);
   });
  }


  doSearch() {

    this.streetService.getStreet(this.motCle, this.currentPage, this.size)
  .subscribe(data => {
     console.log(data);
    //  this.dataPage = data;

    this.pageStreet = data.resultList;
    this.nombreTotalDepagePagination = data.lastPage;
    this.paginationPage = Array.apply(null, {length: this.nombreTotalDepagePagination + 1}).map(Number.call, Number);

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
    this.doSearch();
  }

}
