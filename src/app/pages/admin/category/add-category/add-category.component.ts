import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../services/category.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor( private categoryService: CategoryService) { }
 category={
    title:'',
   description:''

 }
  ngOnInit(): void {
  }

 addNewCategory(){
    if(this.category.title.trim() == '' || this.category.description.trim() == ''){
      Swal.fire("","Please enter the detail!!")
      return;
    }
    this.categoryService.addNewCategory(this.category).subscribe((res:any)=>{
      Swal.fire("Success","Category Added Successfully!")
    },(error)=>{
      Swal.fire("Failed","Unable to Add New Category!!")
    })
 }

}
