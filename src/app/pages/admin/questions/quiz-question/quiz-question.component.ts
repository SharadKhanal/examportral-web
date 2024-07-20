import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {
  quizTitle:any;
  quizId:any
  questions =[
    {

    }
  ]
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res:any)=>{
      this.quizTitle = res.qTitle;
      this.quizId= res.qId;
    })
  }

  onAddQuizQuestion(){
    this.router.navigate(['/admin-dashboard/add-quiz-questions'],{
      queryParams:{
        quizId: this.quizId,
        quizTitle:this.quizTitle
      }
    });
  }

}
