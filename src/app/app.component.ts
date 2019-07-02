import { Component } from '@angular/core';
import { UMLClass } from './models/umlClass.model';
import { TsParserService } from './ts-parser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tsuml';
  textInput = '';
  umlmodel: UMLClass | null = null;
  constructor(private tsParser: TsParserService) { }

  modelChanged(input: string) {
    this.umlmodel = this.tsParser.parseClass(input);
    console.log(this.umlmodel);
  }
}
