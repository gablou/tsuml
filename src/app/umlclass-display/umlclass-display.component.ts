import { Component, OnInit, Input } from '@angular/core';
import { UMLClass } from '../models/umlClass.model';

@Component({
  selector: 'app-umlclass-display',
  templateUrl: './umlclass-display.component.html',
  styleUrls: ['./umlclass-display.component.css']
})
export class UMLClassDisplayComponent implements OnInit {

  constructor() { }

  @Input()
  classModel: UMLClass;

  ngOnInit() {
  }

}
