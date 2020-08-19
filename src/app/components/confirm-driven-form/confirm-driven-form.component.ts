import { Component, OnInit } from '@angular/core';
import { User }  from '../../models/app.model';
import {SubmitService} from '../../services/submit.service';

@Component({
  selector: 'app-confirm-form-driven',
  templateUrl: './confirm-driven-form.component.html',
  styleUrls: ['./confirm-driven-form.component.css']
})
export class ConfirmFormDrivenComponent implements OnInit {
  user = {} as User;
  constructor(private submitService:SubmitService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitService.onSubmit(this.user);
  }

  reset(){
    this.user = {} as User;
  }

}
