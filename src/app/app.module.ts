import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { PaysService } from './../services/Pays.service';
import { AppComponent } from './app.component';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PaysComponent } from './pays/pays.component';
import { AreaComponent } from './area/area.component';
import { CityComponent } from './city/city.component';
import { StreetComponent } from './street/street.component';
import { RouterModule, Routes} from '@angular/router';
import { StreetComponent } from './street/street.component';
import { CityComponent } from './city/city.component';
import { AppComponent } from './app.component';
const appRoutes: Routes = [
  {path: 'country', component: PaysComponent},
  {path: 'area', component: AreaComponent},
  {path: 'city', component: CityComponent},
  {path: 'street', component: StreetComponent},
  {path: '', redirectTo : '/', pathMatch: 'full'}
  ];
@NgModule({
  declarations: [
    AppComponent,
    PaysComponent,
    AreaComponent,
    StreetComponent,
    CityComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
