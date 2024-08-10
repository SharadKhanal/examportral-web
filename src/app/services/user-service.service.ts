import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
    baseUrl:string = environment.baseUrl;
  constructor(private http: HttpClient) {
   }
  register(user:any){
    return this.http.post(this.baseUrl.concat("/auth/signup"),user);
  }
  login(loginData:any){
    return this.http.post(this.baseUrl.concat("/auth/login"),loginData);
  }

  getUserById(id:any){
    return this.http.get(this.baseUrl.concat(`users/userId/${id}`))
  }

}


