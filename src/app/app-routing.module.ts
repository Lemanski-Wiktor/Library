import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MagazineYearDetailsComponent } from './magazine-year-details/magazine-year-details.component';
import { MagazineYearsComponent } from './magazine-years/magazine-years.component';

const routes: Routes = [
  {path: ':name', component:MagazineYearsComponent},
  {path:':name/:year', component: MagazineYearDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo:''},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
