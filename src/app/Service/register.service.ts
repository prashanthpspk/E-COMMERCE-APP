import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  isUserLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }

  submit(data:Object){
    return this.http.post("http://localhost:3000/signup",data, {observe:"response"}).subscribe( result =>{

      this.isUserLoggedIn.next(true);

      localStorage.setItem("Seller", JSON.stringify(result.body))
    })
  }
}
