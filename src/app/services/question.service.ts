import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Question} from "../core/model/question";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  baseApiUrl:string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllQuizQuestion(quizId:any){
    return this.http.get(this.baseApiUrl.concat(`/question/quiz/all/${quizId}`));
  }
  addQuestionToQuiz(question:Question): Observable<any>{
    return this.http.post(this.baseApiUrl.concat("/question/add"),question);
  }
}
