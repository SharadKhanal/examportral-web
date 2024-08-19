import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    baseUrl:string = environment.baseUrl

  public loginStatusSubject = new Subject<boolean>();
  constructor(private http: HttpClient) { }

//generate token
  public  login(value:any){
      return this.http.post(this.baseUrl.concat("/auth/login"), value);
  }

  public currentUser(){
  return this.http.get(this.baseUrl.concat("/users/me"));
}

  //set token in localstorage
  public loginUser(token:any){
      localStorage.setItem("token",token);
      return true;
  }

  public isLoggedIn(){
      let tokenStr = localStorage.getItem("token");
      if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
        return false;
      }else {
        return  true;
      }
  }

  public logout(){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return true;
  }

  public  getToken(){
      localStorage.getItem("token");
  }
  public setUser(user:any){
      localStorage.setItem("user",JSON.stringify(user));
  }

  public getUser(){
      let userStr = localStorage.getItem("user");
      if(userStr != null){
        return JSON.parse(userStr);
      } else{
        this.logout();
        return  null;
      }
  }

  getUserRole(){
      let user  = this.getUser();
      return user.authorities[0].authority;
  }

}
