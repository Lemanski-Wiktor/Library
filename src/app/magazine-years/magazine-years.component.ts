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
    this._magazinesNames.getMagazinesYears().then(data => { this.years=data;      
      this.route.paramMap.subscribe(params => {
        this.name = params.get("name") || ""
        if(this.years.get(params.get("name")) == undefined){
          this.router.navigate(["/"])
        }else{
          this.years = this.years.get(params.get("name")).split(',')
        }
      })
    })    
  }
  showDetails(year: string){
    this.year = year
    this.router.navigate([this.name+"/"+this.year])
  }
}
