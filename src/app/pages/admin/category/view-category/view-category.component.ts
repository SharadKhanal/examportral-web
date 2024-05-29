import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../services/category.service";

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  categories:any=[];
  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getAllCategory().subscribe((res:any)=>{
      this.categories = res;
    })
  }

}
