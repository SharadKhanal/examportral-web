import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../services/user-service.service";
import {ToastrService} from "ngx-toastr";
import Swal from 'sweetalert2';
import {isEmpty} from "rxjs";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor( private userService: UserServiceService, private toastrService:ToastrService) { }
user= {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: ''

}
  ngOnInit(): void {
  }
  onRegisterform(){
    this.userService.addUser(this.user).subscribe((res:any)=>{
     Swal.fire("Success","User registered successfully");
    },
      (error)=>{
        Swal.fire("Failed","Failed to register user!!!");
      })
  }

  reset(){

  }
}
