import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../services/category.service";
import Swal from "sweetalert2";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService,
              private modalService:NgbModal) { }
  categories:any=[];
  categoryId:any;
  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getAllCategory().subscribe((res:any)=>{
      this.categories = res;
      this.categories.forEach((dd:any)=>{
        this.categoryId = dd.cid;
      })
    },(error)=>{
      console.error(error)
    })
  }

  deleteCategory(template:any){
    this.modalService.open(template);
  }

  onDelete(id:any){
    this.categoryService.deleteCategoryById(id).subscribe((res:any)=>{
      Swal.fire("Sucess","Successfully Deleted category!")
      this.modalService.dismissAll();
      this.getAllCategories();
    },(error)=>{
      Swal.fire("Failed","Unable to delete category!! ");
    })
  }


}
