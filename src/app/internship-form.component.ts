import { InternshipValidator } from './internship.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators,
  FormControl
} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'internship-form',
  styleUrls: ['./internship-form.styles.css'],
  templateUrl: './internship-form.template.html'
})
export class InternshipFormComponent implements OnInit {
  public internshipForm: FormGroup;
  

  // DI. will send in an object in the constructor at runtime.
  // How nice! Can I have pancakes too?
  constructor(fb: FormBuilder, private router: Router) {
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
    
    if (internshipForm.valid) {
      this.router.navigate(['/internships']);
    }

    console.log(internshipForm);
  }

  ngOnInit() { }
}