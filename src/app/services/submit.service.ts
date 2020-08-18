import { Injectable } from '@angular/core';
import { User }  from '../models/app.model';
@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  constructor() { }

  onSubmit(user: User){
    console.log(user);
  }
}
