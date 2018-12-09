import { Component, OnInit } from '@angular/core';
import { AreaService } from './../../services/area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  pageArea: any;
  dataPage: any;
  currentPage: number = 0;
  motCle: String = '';
  size: number = 8;
  nombreTotalDepagePagination: number;
  paginationPage: number [] ;

  constructor(public areaService: AreaService ) { }

  doSearch() {

    this.areaService.getArea(this.motCle, this.currentPage, this.size)
  .subscribe(data => {
     console.log(data);
    //  this.dataPage = data;

    this.pageArea = data.resultList;
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
