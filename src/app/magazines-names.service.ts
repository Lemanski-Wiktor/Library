import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { NgxXmlToJsonService } from 'ngx-xml-to-json';

@Injectable({
  providedIn: 'root',
})
export class MagazinesNamesService {
  private url = '../assets/czasopisma.xml';
  public names!: any;
  public images:object[] = []
  public years = new Map()
  public details = new Map();

  constructor(
    private httpClient: HttpClient,
    private ngxXmlToJsonService: NgxXmlToJsonService
  ) {}

  getMagazinesImg() {
    const options = {
      textKey: 'text',
      attrKey: 'attr',
      cdataKey: 'cdata',
    };

    return new Promise((resolve, reject) => {
      this.httpClient
        .get(this.url, { responseType: 'text' })
        .subscribe({
          next: (v) => {
            const jsonObj = this.ngxXmlToJsonService.xmlToJson(v, options);
            this.names = jsonObj.czasopisma
            this.images=[]

            for(const[key,value] of Object.entries(this.names)){
              if(key === 'zmienne'){
                // console.log(this.names.zmienne)
                for(const[key,value] of Object.entries(this.names.zmienne)){
                  if(key!='text'){
                    this.images.push(value as Object) 
                  }
                }
              }
            }            
          },
          error: (e) => reject(e),
          complete: () => resolve(this.images),
        });
    });
  }

  getMagazinesYears() {
    const options = {
      textKey: 'text',
      attrKey: 'attr',
      cdataKey: 'cdata',
    };

    return new Promise((resolve, reject) => {
      this.httpClient
        .get(this.url, { responseType: 'text' })
        .subscribe({
          next: (v) => {
            const jsonObj = this.ngxXmlToJsonService.xmlToJson(v, options);
            this.names = jsonObj.czasopisma.lata
            
            for(let name in this.names){
              if(name != 'text'){
                this.years.set(`${name}`,`${this.names[name].text}`)
              }}
          },
          error: (e) => reject(e),
          complete: () => resolve(this.years),
        });
    });
  }

  getMagazinesDetails() {
    const options = {
      textKey: 'text',
      attrKey: 'attr',
      cdataKey: 'cdata',
    };

    return new Promise((resolve, reject) => {
      this.httpClient
        .get(this.url, { responseType: 'text' })
        .subscribe({
          next: (v) => {
            const jsonObj = this.ngxXmlToJsonService.xmlToJson(v, options);

            this.names = jsonObj.czasopisma
              for(let name in this.names){
                for(const[key1,value1] of Object.entries(this.names)){
                  if(name != 'zmienne' && name != 'lata' && name != 'text'){
                    this.details.set(name,this.names[name])
                  }
                }
              }
          },
          error: (e) => reject(e),
          complete: () => resolve(this.details),
        });
    });
  }
}
