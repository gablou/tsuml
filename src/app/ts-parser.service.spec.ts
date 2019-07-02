import { TestBed } from '@angular/core/testing';

import { TsParserService } from './ts-parser.service';
import { UMLClass } from './models/umlClass.model';

describe('TsParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TsParserService = TestBed.get(TsParserService);
    expect(service).toBeTruthy();
  });

  it('should parse person class', () => {
    const service: TsParserService = TestBed.get(TsParserService);
    const input = `class Person {

      private _id: string;

      protected name: string;

      constructor() {
        this._id = uuid.v4();
      }

      public getName(): string {
        return this.name;
      }

      public setName(name: string): void {
        this.name = name;
      }

      public getId(): string {
        return this._id;
      }

      public static build(): Person {
        return new Person();
      }
    }`;
    const expected: UMLClass = {
      name: 'Person',
      properties: [
        { name: '_id', type: 'string', visibility: 'private', isClassifier: false },
        { name: 'name', type: 'string', visibility: 'protected', isClassifier: false }
      ],
      methods: [
        { name: 'constructor', parameters: '', returnType: '', visibility: 'public', isClassifier: false },
        { name: 'getName', parameters: '', returnType: 'string', visibility: 'public', isClassifier: false },
        { name: 'setName', parameters: 'name: string', returnType: 'void', visibility: 'public', isClassifier: false },
        { name: 'getId', parameters: '', returnType: 'string', visibility: 'public', isClassifier: false },
        { name: 'build', parameters: '', returnType: 'Person', visibility: 'public', isClassifier: true }
      ]
    };

    expect(service.parseClass(input)).toEqual(expected);
  });
});
