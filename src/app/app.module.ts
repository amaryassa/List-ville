import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { PaysService } from './../services/Pays.service';
import { AppComponent } from './app.component';
import { PaysComponent } from './pays/pays.component';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PaysComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
