import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../../../services/question.service";
import Swal from "sweetalert2";

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
      this.questions= res;
      console.log("questions:",this.questions)
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

  onDeleteQuestion(id:number){
    Swal.fire({
      icon:'info',
      title:"Are you sure to delete",
      confirmButtonText:'Delete',
      showCancelButton:true
    }).then((result:any)=>{
      if(result.isConfirmed){
        this.questionService.deleteQuestion(id).subscribe((res:any)=>{
          this.getAllQuestions();
          Swal.fire("Success","Successfully deleted the question!")
        },error => {
          Swal.fire("Failed","Unable to delete the question!!");
        })
      }
    })
  }

  onUpdateQuestion(questionId:any){
    this.router.navigate(['/admin-dashboard/edit-questions'],{
      queryParams:{
        questionId: questionId,
        quizId: this.quizId
      }
    })
  }

}
