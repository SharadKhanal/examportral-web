import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-quiz-questions',
  templateUrl: './add-quiz-questions.component.html',
  styleUrls: ['./add-quiz-questions.component.scss']
})
export class AddQuizQuestionsComponent implements OnInit {
  quizTitle:any;
  quizId:any;
  constructor( private router: Router,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res:any)=>{
      this.quizTitle = res.quizTitle;
      this.quizId = res.quizId;
    })
  }



}
