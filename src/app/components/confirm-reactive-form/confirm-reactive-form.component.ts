import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../models/app.model';
import { SubmitService } from '../../services/submit.service';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../../services/api-service/api-service.service';

@Component({
  selector: 'app-reactive-confirm-form',
  templateUrl: './confirm-reactive-form.component.html',
  styleUrls: ['./confirm-reactive-form.component.css']
})
export class ConfirmReactiveFormComponent implements OnInit {

  form: FormGroup;
  user: User;
  personId: -1;
  loading = true;
  isNotFound = false;
  phoneNumberPattern = "^[+0-9]?[0-9\\.\\-\\(\\)]+$";
  englishNamePattern = "^[a-zA-Z]+$";
  name = new FormControl("", Validators.compose([
    Validators.required,
    Validators.pattern(this.englishNamePattern)
  ]));

  constructor(fb: FormBuilder, private submitService: SubmitService, private route: ActivatedRoute, private apiService: ApiServiceService) {
    this.form = fb.group({
      "id":[{value:'', disabled: this.isNewForm()},[]],
      "name": this.name,
      "surname": ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.englishNamePattern)
      ])],
      "address": [''],
      "phone": ['', Validators.compose([
        Validators.pattern(this.phoneNumberPattern)
      ])],
      "comments": [''],
      "privacy": ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.personId = params.id;
      console.log("personId = ", this.personId);
      if (typeof this.personId === 'undefined') {
        this.loading = false;
        this.personId = -1;
        console.log("isNotFound = ", this.isNotFound);
      } else {
          this.apiService.getJSON().subscribe((data: User[]) => {
          let user = this.apiService.getUserById(data, this.personId);
          if (user.id)  {this.form.setValue(user); this.form.controls['id'].enable();}
          this.isNotFound = user.id != this.personId;
          this.loading = false;
          console.log("isNotFound = ", this.isNotFound);
        }
        );
      }

    });

  }

  onSubmitModelBased() {
    console.log("model-based form submitted");
    this.submitService.onSubmit(this.form.value);
  }

  reset() {
    this.form.reset();
    this.form.clearValidators();
    this.form.updateValueAndValidity();
  }

  isNewForm():boolean{
    return this.submitService.isNewForm(this.personId);
  }


}

