import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
 baseUrlAPI:string = environment.baseUrl+ "/quiz"
  constructor(private http:HttpClient) { }

  addQuiz(quiz:any){
   this.http.post(this.baseUrlAPI.concat("/add"),quiz);
  }
  getAllQuiz(){
   this.http.get(this.baseUrlAPI.concat("/all"))
  }
}
