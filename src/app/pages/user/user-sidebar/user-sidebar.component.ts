import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent implements OnInit {
  category:any;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((res:any)=>{
      this.category=res;
    },error => {
      console.error(error,"UNable to load category!!");
    })
  }

}
