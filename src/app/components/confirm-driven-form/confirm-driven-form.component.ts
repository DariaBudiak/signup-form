import { Component, OnInit } from '@angular/core';
import { User }  from '../../models/app.model';
import {SubmitService} from '../../services/submit.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-confirm-form-driven',
  templateUrl: './confirm-driven-form.component.html',
  styleUrls: ['./confirm-driven-form.component.css']
})
export class ConfirmFormDrivenComponent implements OnInit {
  user = {} as User;
  phoneNumberPattern = "^[+0-9]?[0-9\\.\\-\\(\\)]+$";
  englishNamePattern = "^[a-zA-Z]+$";
  constructor(private submitService:SubmitService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitService.onSubmit(this.user);
  }

  reset(form :NgForm){

    form.resetForm();

  }

}
