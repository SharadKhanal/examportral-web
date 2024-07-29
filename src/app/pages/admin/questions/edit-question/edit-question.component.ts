import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../../../services/question.service";
import {Question} from "../../../../core/model/question";
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
  editQuestionForm: FormGroup = new FormGroup<any>({});
  questionId:any;
  quizId:any;
  question:any;
  qstion: Question = new Question();



  constructor(private activatedRoute: ActivatedRoute,
              private questionService: QuestionService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.activatedRoute.queryParams.subscribe((res:any)=>{
      this.questionId = res.questionId;
    });
    this.getQuestionById();
  }

  getQuestionById(){
    this.questionService.getQuestionById(this.questionId).subscribe((res:any)=>{
      this.question= res;
      this.pathchQuestion(this.question);

    })
  }

 pathchQuestion(data:any){
    this.editQuestionForm.patchValue(data);
 }

  initForm(){
    this.editQuestionForm = this.formBuilder.group({
      content: [undefined],
      option1:[undefined],
      option2:[undefined],
      option3:[undefined],
      option4:[undefined],
      answer:[undefined],
    })
  }

  onSubmit(value:any){
    this.qstion.content = value.content;
    this.qstion.option1 = value.option1;
    this.qstion.option2 = value.option2;
    this.qstion.option3 = value.option3;
    this.qstion.option4 = value.option4;
    this.qstion.answer = value.answer;
    this.qstion.quiz={
      qid:Number(this.quizId)
    }

    this.questionService.editQuestion(this.qstion).subscribe((res:any)=>{
    Swal.fire("Success","Successfully Updated Question!!")
      this.router.navigate(['/admin-dashboard']);
    },error => {
      Swal.fire("Failed","Unable to update question!!");
    })

  }

}
