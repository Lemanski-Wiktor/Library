import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  magazines: object[] = []
  currentYearMagazines: any[] = []

  constructor(private _magazinesNames: MagazinesNamesService, private route: ActivatedRoute) { 

  }
  ngOnInit(){
    this._magazinesNames.getMagazinesDetails().then(data => { 
      this.details = data
      this.route.paramMap.subscribe(params => {
        this.name = params.get("name") || "";
        this.year = params.get("year") || ""
        
        this.details = this.details.get(params.get("name"))
        for(const [key,value] of Object.entries(this.details)){
          if(key!='text'){
            this.magazines.push(value as Object)
          }
        }

        for(const magazine of this.magazines){
          for(const [key,value] of Object.entries(magazine))
          if(key === 'attr'){
            if(value.rok === this.year){
              if(Object.keys(magazine).length > 1){
                this.currentYearMagazines.push(magazine as any)
              }
            }
          }
        }
        console.log(this.currentYearMagazines);
      })
    })    
  }
}
