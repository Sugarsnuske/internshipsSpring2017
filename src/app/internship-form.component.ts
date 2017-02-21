import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators,
  FormControl } from '@angular/forms';

@Component({
  selector: 'internship-form',
  template: `
  <h2>Create new internship report</h2>

  <form [formGroup]="internshipForm" 
    (ngSubmit)="submitInternship(internshipForm.value)">

    <div>
      <label>Initials</label>
      <input type="text" placeholder="Initials" id="initials"
        formControlName="initials">
      <div *ngIf="!internshipForm.controls['initials'].valid && internshipForm.controls['initials'].touched">
        Please fill out the initials
      </div>  
    </div>

    <div>
      <label>Student name</label>
      <input type="text" placeholder="Student name" id="studentname"
        formControlName="studentname">
    </div>

    <button type="submit">Submit</button>
  </form>
  `
})
export class InternshipFormComponent implements OnInit {
  private internshipForm: FormGroup;

  // DI. will send in an object in the constructor at runtime.
  // How nice! Can I have pancakes too?
  constructor(fb: FormBuilder) {
    this.internshipForm = fb.group( {
      //controlname: ['initial value', rules]
      'initials': ['', Validators.required],
      'studentname': ['', Validators.required],
    } )
  }

  submitInternship(internshipForm) : void {
    console.log(internshipForm);
  }

  ngOnInit() { }
}