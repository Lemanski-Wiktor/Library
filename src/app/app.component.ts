import { Component, OnInit } from '@angular/core';
import { NgxXmlToJsonService } from 'ngx-xml-to-json';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Library';
  public names: any;
  public images: string[] = []

  constructor(private ngxXmlToJsonService: NgxXmlToJsonService) {
    const options = {
      textKey: 'text',
      attrKey: 'attr',
      cdataKey: 'cdata',
    };

    fetch('./assets/czasopisma.xml')
      .then((response) => response.text())
      .then((data) => {
        const jsonObj = this.ngxXmlToJsonService.xmlToJson(data, options);
        this.names = jsonObj.czasopisma.zmienne;
        for(let name in this.names){
          if(name != 'text'){
            this.images.push(`http://atarionline.pl/biblioteka/czasopisma/img/${this.names[name].src.text}`)
          }
        }
      })
      .catch(console.error);
      console.log(this.images)
  }
  ngOnInit(): void {
    
  }
}
