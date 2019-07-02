import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UMLClassDisplayComponent } from './umlclass-display.component';

describe('UMLClassDisplayComponent', () => {
  let component: UMLClassDisplayComponent;
  let fixture: ComponentFixture<UMLClassDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UMLClassDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UMLClassDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
