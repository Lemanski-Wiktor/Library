import { Component } from '@angular/core';
import { MagazinesNamesService } from './magazines-names.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Library';
  images: any;
  magazineName = ''
  isActiveLibrary = false;

  constructor(private _magazinesNames: MagazinesNamesService, private router: Router) {
    this.router.events.forEach(e =>{
      if(e instanceof NavigationStart){
        if(e.url === '/'){
          this.isActiveLibrary = true
        }else{
          this.isActiveLibrary=false
        }
      }
    })
  }

  ngOnInit(): void {
    this._magazinesNames.getMagazinesImg().then(data => {
      this.images=data; 
    })
  }
  showYears(magazineName: string){
    this.magazineName = magazineName
    this.router.navigate([magazineName])
  }
  onOutletLoaded(component: any) {
    component.nameMagazine = this.magazineName;
  } 
}
