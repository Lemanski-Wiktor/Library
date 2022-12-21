import { Component, Input, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { MagazinesNamesService } from '../magazines-names.service';

@Component({
  selector: 'app-magazine-years',
  templateUrl: './magazine-years.component.html',
  styleUrls: ['./magazine-years.component.css']
})
export class MagazineYearsComponent implements OnInit{
  years: any;
  yearsOfMagazine = []
  year=""
  name=""
  @Input() nameMagazine?: any;
  constructor(private route: ActivatedRoute,private _magazinesNames: MagazinesNamesService, private router: Router) { 

  }
  ngOnInit(){
    console.log(this.nameMagazine)
    this._magazinesNames.getMagazinesYears().then(data => { this.years=data;
      
      this.route.paramMap.subscribe(params => {
        this.years = this.years.get(params.get("name")).split(',')
        this.name = params.get('name') || ""
      })
    })    
  }
  showDetails(year: string){
    this.year = year
    this.router.navigate([this.nameMagazine+"/"+this.year])
  }
}
