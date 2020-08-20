import { Component, OnInit } from '@angular/core';
import { User } from '../../models/app.model';
import { SubmitService } from '../../services/submit.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../../services/api-service/api-service.service';
import { LocationChangeEvent } from '@angular/common';
@Component({
  selector: 'app-confirm-form-driven',
  templateUrl: './confirm-driven-form.component.html',
  styleUrls: ['./confirm-driven-form.component.css']
})
export class ConfirmFormDrivenComponent implements OnInit {
  user = {} as User;
  loading = true;
  personId = -1;
  isNotFound = false;
  phoneNumberPattern = "^[+0-9]?[0-9\\.\\-\\(\\)]+$";
  englishNamePattern = "^[a-zA-Z]+$";
  constructor(private submitService: SubmitService, private route: ActivatedRoute, private apiService: ApiServiceService) { }

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
          this.user = this.apiService.getUserById(data, this.personId);
          this.isNotFound = this.user.id != this.personId;
          this.loading = false;
          console.log("isNotFound = ", this.isNotFound);
        }
        );
      }


    });


  }

  onSubmit() {
    this.submitService.onSubmit(this.user);
  }

  reset(form: NgForm) {

    form.resetForm();

  }

  isNewForm():boolean{
    return this.submitService.isNewForm(this.personId);
  }

}
