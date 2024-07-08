import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../../services/quiz.service";

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {
  category: any;
  quizzId: any;
  quizz={
    title:'',
    description: '',
    maxMarks:'',
    noOfQuestions:'',
    active:true,
    category:{
      cid:''
    }
  };
  quiz:any;

  constructor( private activatedRoute: ActivatedRoute,
               private quizService: QuizService) { }

  ngOnInit(): void {
   this.activatedRoute.queryParams.subscribe((res:any)=>{
     this.quizzId = res.id;
   });
   this.getQuizById();
  }

  getQuizById(){
    this.quizService.getQuizById(this.quizzId).subscribe((res:any)=>{
      this.quiz = res;
      console.log("quiz:",this.quiz);
    })
  }


  editQuiz(){

  }
}
