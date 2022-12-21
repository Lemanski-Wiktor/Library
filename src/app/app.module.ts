import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MagazineYearsComponent } from './magazine-years/magazine-years.component';
import { MagazineYearDetailsComponent } from './magazine-year-details/magazine-year-details.component';
import { MagazinesNamesService } from './magazines-names.service';
@NgModule({
  declarations: [
    AppComponent,
    MagazineYearsComponent,
    MagazineYearDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MagazinesNamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
