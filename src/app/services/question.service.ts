import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  baseApiUrl:string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getQuizQuestion(quizId:any){
    return this.http.get(this.baseApiUrl.concat(`/question/quiz/${quizId}`));
  }
}
