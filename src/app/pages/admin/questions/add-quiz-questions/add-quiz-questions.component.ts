import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Question} from "../../../../core/model/question";
import {QuestionService} from "../../../../services/question.service";
import Swal from "sweetalert2";
import {isEmpty} from "rxjs";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: 'app-add-quiz-questions',
  templateUrl: './add-quiz-questions.component.html',
  styleUrls: ['./add-quiz-questions.component.scss']
})
export class AddQuizQuestionsComponent implements OnInit {
  public Editor = ClassicEditor;
  quizTitle:any;
  quizId:any;
  question: Question = new Question();

  option={
    option1:'',
    option2:'',
    option3:'',
    option4:''
  }
  addQuestionForm: FormGroup= new FormGroup({});
  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private formBuilder: FormBuilder,
               private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.activatedRoute.queryParams.subscribe((res:any)=>{
      this.quizTitle = res.quizTitle;
      this.quizId = res.quizId;
    })
  }

  initForm(){
   this.addQuestionForm = this.formBuilder.group({
      content:[undefined],
      option1:[undefined],
      option2:[undefined],
      option3:[undefined],
      option4: [undefined],
      answer: [undefined],
      image:[undefined]
    })
  }

  onSubmit(value:any){
    this.question.content =  value.content;
    this.question.option1 = value.option1;
    this.question.option2 = value.option2;
    this.question.option3 = value.option3;
    this.question.option4 = value.option4;
    this.question.answer = value.answer
    this.question.quiz = {
      qid: Number(this.quizId)
    }

    if (value.content == null) {
      Swal.fire("Please insert the Question!");
      return;
    }

    this.questionService.addQuestionToQuiz(this.question).subscribe((res: any) => {
      Swal.fire("Success", "Successfully added question to " + this.quizTitle);
      this.addQuestionForm.reset();
      this.router.navigate(['/admin-dashboard'])
    }, error => {
      Swal.fire("Failed", "Unable to add question to " + this.quizTitle);
    })
  }



}
