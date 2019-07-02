import { Injectable } from '@angular/core';
import { UMLClass, UMLProperty, UMLmethod, UMLVisibility } from './models/umlClass.model';

@Injectable({
  providedIn: 'root'
})
export class TsParserService {

  constructor() { }

  parseClass(input: string): UMLClass {
    const className = input.match(/class (\w+) \{/)[1];
    const properties: UMLProperty[] = [];
    const methods: UMLmethod[] = [];
    properties.push(...(input.match(/^ *private (\w+): (\w+);/gm).map(
      line => {
        const tmp = line.match(/ *private (\w+): (\w+);/);
        return { name: tmp[1], type: tmp[2], visibility: 'private' as UMLVisibility, isClassifier: false };
      }
    )));
    properties.push(...(input.match(/^ *protected (\w+): (\w+);/gm).map(
      line => {
        const tmp = line.match(/ *protected (\w+): (\w+);/);
        return { name: tmp[1], type: tmp[2], visibility: 'protected' as UMLVisibility, isClassifier: false };
      }
    )));
    methods.push(...(input.match(/^ *(public|)( static | |)(\w+)\((.*)\)(: |)(\w+|) {/gm).map(
      line => {
        const tmp = line.match(/^ *(public|)( static | |)(\w+)\((.*)\)(: |)(\w+|) {/);
        return {
          name: tmp[3],
          parameters: tmp[4],
          returnType: tmp[6],
          visibility: 'public' as UMLVisibility,
          isClassifier: tmp[2] === ' static '
        };
      }
    )));
    return {
      name: className,
      properties,
      methods
    };
  }
}
