import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private category: CategoryService) { }

  ngOnInit(): void {
    this.category.getAllCategory().subscribe((res:any)=>{
      console.log("categiory:",res);
    })
  }

}
