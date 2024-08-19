import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isLoggedin= false;
    user:any;
  constructor(public loginService:LoginService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedin = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedin = this.loginService.isLoggedIn();
      this.user = this.loginService.getUser();
    })
  }


  logout(){
    this.loginService.logout();
    // this.loginService.loginStatusSubject.next(false);
    this.router.navigate(["/login"]);
  }
}
