import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent implements OnInit {
  category:any;
  constructor(private categoryService:CategoryService,
              private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((res:any)=>{
      this.category=res;
    },error => {
      console.error(error,"Unable to load category!!");
    })
  }

  onCategoryQuiz(cId:any){
    this.router.navigate(['/user-dashboard'],{
      queryParams: {
        catId: cId
      }
    })
  }

}
