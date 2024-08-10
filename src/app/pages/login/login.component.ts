import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {UserServiceService} from "../../services/user-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ToastrService} from "ngx-toastr";
import {LoginService} from "../../services/login.service";

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
              private toastrService:ToastrService
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
     console.log("tokan:",res.token);
     this.loginService.loginUser(res.token);
     console.log("localstorage:",localStorage)

     this.loginService.currentUser().subscribe((user:any)=>{
       console.log("current user:",user);
       this.loginService.setUser(user);
     })
   })

  }

}
