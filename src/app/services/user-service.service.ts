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
  addUser(user:any){
    return this.http.post(this.baseUrl.concat("/user"),user);
  }
}


