import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../../../services/question.service";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {
  quizTitle:any;
  quizId:any
  questions :any;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private questionService: QuestionService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res:any)=>{
      this.quizTitle = res.qTitle;
      this.quizId= res.qId;
    });
    this.getAllQuestions();
  }

  getAllQuestions(){
    this.questionService.getAllQuizQuestion(this.quizId).subscribe((res:any)=>{
      console.log("questions:",res);
      this.questions= res;
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
