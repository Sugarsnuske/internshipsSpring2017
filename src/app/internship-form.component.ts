import { InternshipValidator } from './internship.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators,
  FormControl } from '@angular/forms';

@Component({
  selector: 'internship-form',
  styleUrls: ['./internship-form.styles.css'],
  templateUrl: './internship-form.template.html'
})
export class InternshipFormComponent implements OnInit {
  public internshipForm: FormGroup;

  // DI. will send in an object in the constructor at runtime.
  // How nice! Can I have pancakes too?
  constructor(fb: FormBuilder) {
    this.internshipForm = fb.group( {
      //controlname: ['initial value', rules]
      'initials': ['', [
        Validators.required, 
        InternshipValidator.getInitialsValidator()
      ]],
      'studentname': ['', Validators.required],
    } )
  }

  submitInternship(internshipForm) : void {
    console.log(internshipForm);
  }

  ngOnInit() { }
}