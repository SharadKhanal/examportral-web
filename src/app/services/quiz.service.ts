import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
 baseUrlAPI:string = environment.baseUrl;
  constructor(private http:HttpClient) { }

  addQuiz(quiz:any){
  return  this.http.post(this.baseUrlAPI.concat("/quiz/add"),quiz);
  }
  getAllQuiz(){
  return  this.http.get(this.baseUrlAPI.concat("/quiz/all"))
  }
  deleteQuiz(id:any){
    return this.http.delete(this.baseUrlAPI.concat(`/quiz/delete/${id}`))
  }

  getQuizById(id:any){
    return this.http.get(this.baseUrlAPI.concat(`/quiz/getQuizById/${id}`));
  }
  editQuiz(quiz:any){
    return this.http.put(this.baseUrlAPI.concat('/quiz/update'),quiz);
  }

  public getQuizByCategory(categoryId:any){
    return this.http.get(this.baseUrlAPI.concat(`/quiz/getQuizByCategory/${categoryId}`));
  }


}
