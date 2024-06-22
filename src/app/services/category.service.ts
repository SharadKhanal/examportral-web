import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl:string= environment.baseUrl
  constructor(private  http: HttpClient) { }

  getAllCategory(){
    return this.http.get(this.baseUrl.concat("/category/all"))
  }

  public addNewCategory(category:any){
    return this.http.post(this.baseUrl.concat("/category/add"),category)
  }

  public deleteCategoryById(id:any){
    return this.http.delete(this.baseUrl.concat(`/category/delete/${id}`));
  }
}
