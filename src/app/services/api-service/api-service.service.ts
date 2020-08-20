import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User }  from '../../models/app.model';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {

  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/json/users.json");
}

  public getUserById(data:User[],personId:number):any {
    let user =  data.find(e => e.id === personId) as User;
    if (typeof user === 'undefined') user = {} as User;
    return user;
  }
}
