import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MagazineYearDetailsComponent } from './magazine-year-details/magazine-year-details.component';
import { MagazineYearsComponent } from './magazine-years/magazine-years.component';

const routes: Routes = [
  {path: '', component:AppComponent},
  // {path: '**',component:AppComponent},
  {path: ':name', component:MagazineYearsComponent},
  {path:':name/:year', component: MagazineYearDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
