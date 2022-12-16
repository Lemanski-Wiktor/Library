import { Component } from '@angular/core';
import { NgxXmlToJsonService } from 'ngx-xml-to-json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library';
  public jsonObj!: any;

  constructor(private ngxXmlToJsonService: NgxXmlToJsonService) {
    const options = {
      // set up the default options
      textKey: 'text', // tag name for text nodes
      attrKey: 'attr', // tag for attr groups
      cdataKey: 'cdata', // tag for cdata nodes (ignored if mergeCDATA is true)
    };

    fetch('./assets/czasopisma.xml')
      .then((response) => response.text())
      .then((data) => {
        this.jsonObj = this.ngxXmlToJsonService.xmlToJson(data, options);

        this.jsonObj = this.jsonObj.czasopisma.zmienne;
        console.log(this.jsonObj);
      })
      .catch(console.error);
  }
}
