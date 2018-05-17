import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './google_material/MaterialModule';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ChartComponent } from './chart/chart.component';
import {DataService} from './services/data.service';
import { MlchartsComponent } from './mlcharts/mlcharts.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ChartComponent,
    MlchartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([

    ])
  ],
  exports: [MaterialModule,RouterModule],
  providers:[DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
