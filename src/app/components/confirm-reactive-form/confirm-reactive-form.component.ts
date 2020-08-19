import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User }  from '../../models/app.model';
import {SubmitService} from '../../services/submit.service';

@Component({
  selector: 'app-reactive-confirm-form',
  templateUrl: './confirm-reactive-form.component.html',
  styleUrls: ['./confirm-reactive-form.component.css']
})
export class ConfirmReactiveFormComponent implements OnInit {

  form: FormGroup;
  user: User;
  phoneNumberPattern = "^[+0-9]?[0-9\\.\\-\\(\\)]+$";
  englishNamePattern = "^[a-zA-Z]+$";
  firstName = new FormControl("", Validators.required);

  constructor(fb: FormBuilder,private submitService: SubmitService) {
    this.form = fb.group({
      "name": ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.englishNamePattern)
      ])],
      "surname":['', Validators.compose([
        Validators.required,
        Validators.pattern(this.englishNamePattern)
      ])],
      "address":[''],
      "phone":['', Validators.compose([
        Validators.pattern(this.phoneNumberPattern)
      ])],
      "comments":[''],
      "privacy":['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onSubmitModelBased() {
    console.log("model-based form submitted");
    this.submitService.onSubmit(this.form.value);
  }

  reset() {
    this.form.reset();
  }


}

