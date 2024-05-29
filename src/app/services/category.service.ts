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
}