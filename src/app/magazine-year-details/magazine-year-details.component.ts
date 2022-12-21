import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MagazinesNamesService } from '../magazines-names.service';

@Component({
  selector: 'app-magazine-year-details',
  templateUrl: './magazine-year-details.component.html',
  styleUrls: ['./magazine-year-details.component.css']
})
export class MagazineYearDetailsComponent {
  details:any;
  name = ""
  year = ""
  goodYears:any = []
  magazines: object[] = []
  currentYearMagazines: any[] = []

  constructor(private _magazinesNames: MagazinesNamesService, private route: ActivatedRoute, private router: Router) { 

  }
  ngOnInit(){
    this._magazinesNames.getMagazinesDetails().then(data => { 
      this.details = data
      this.route.paramMap.subscribe(params => {
        this.name = params.get("name") || "";
        this.year = params.get("year") || ""
        
        console.log(params.get("name"));

        if(this.details.get(params.get("name")) == undefined){
          this.router.navigate(["/"])
        }else{
          this.details = this.details.get(params.get("name"))
        }
        
        for(const [key,value] of Object.entries(this.details)){
          if(key!='text'){
            this.magazines.push(value as Object)
          }
        }

        for(const magazine of this.magazines){
          for(const [key,value] of Object.entries(magazine))
          if(key === 'attr'){
            this.goodYears.push(value.rok)
            
            if(value.rok === this.year){
              if(Object.keys(magazine).length > 1){
                this.currentYearMagazines.push(magazine as any)
              }
            }
          }
        }
        if(!this.goodYears.includes(this.year)){
          this.router.navigate(["/"])
        }
        // console.log(this.currentYearMagazines);
      })
    })    
  }
}
