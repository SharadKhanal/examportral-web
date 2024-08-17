import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {UserServiceService} from "../../services/user-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ToastrService} from "ngx-toastr";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData={
    email:'',
    password:''
  }

  loginForm: FormGroup = new FormGroup<any>({});
  constructor(private category: CategoryService,
              private loginService:LoginService,
              private formBuilder: FormBuilder,
              private snack:MatSnackBar,
              private toastrService:ToastrService,
              private router: Router
  ) { }

  ngOnInit(): void {
      this.initForm()

  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      email:[undefined],
      password: [undefined]
    })
  }

  login(value:any){
   if(value.email.trim() == '' || value.password ==''){
     this.snack.open("Username or password is required!!",'',{
       duration:3000
     });
     return;
   }
   this.loginService.login(value).subscribe((res:any)=>{
     this.toastrService.success("Login Successfully!!")
     this.loginService.loginUser(res.token);
     this.loginService.currentUser().subscribe((user:any)=>{
       this.loginService.setUser(user);
       this.userNavigation();
     })
   },error => {
     this.toastrService.error("Unable to login!");
     this.loginForm.reset();
   });
  }
  userNavigation() {
    if (this.loginService.getUserRole() == "ADMIN") {
      this.router.navigate(["/admin-dashboard"])
    } else if(this.loginService.getUserRole() == "NORMAL"){
      this.router.navigate(['/user-dashboard']);
    } else{
      this.loginService.logout();
    }

  }
}
