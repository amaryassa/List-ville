import { Component, OnInit } from '@angular/core';
import { PaysService } from './../../services/pays.service';
@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {
  pagePays: any;
  currentPage: number = 0;
  size: number = 120;
  nombreTotalDepagePagination: number;
  paginationPage: number [] ;
  constructor(public paysService: PaysService ) { }

  doSearch() {

    this.paysService.getPays(this.currentPage, this.size)
  .subscribe(data => {
    //  console.log(data);
    this.pagePays = data.resultList;
    this.nombreTotalDepagePagination = data.lastPage;
    this.paginationPage = Array.apply(null, {length: this.nombreTotalDepagePagination + 1}).map(Number.call, Number);

  }, err => {
    console.error(err);
   });
  }
  chercher() {
    this.doSearch();
  }
    goToPage(i: number) {
      this.currentPage = i;
      this.doSearch();
    }


  ngOnInit() {
    // this.pagePays = 'Amar';

  }

}
