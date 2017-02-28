import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { InternshipFormComponent } from './internship-form.component';


let comp:    InternshipFormComponent;
let fixture: ComponentFixture<InternshipFormComponent>;
let de:      DebugElement;
let el:      HTMLElement;
let input:   HTMLInputElement;

import {FormsModule, ReactiveFormsModule, FormGroup} from "@angular/forms";

describe('InternshipFormComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipFormComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ], // declare the test component
    });

    fixture = TestBed.createComponent(InternshipFormComponent);
    comp = fixture.componentInstance;

    input = fixture.debugElement.query(By.css("input")).nativeElement;
    el = fixture.debugElement.nativeElement; //the component. (Beware of *ngIf invisible elements)
  });
});
