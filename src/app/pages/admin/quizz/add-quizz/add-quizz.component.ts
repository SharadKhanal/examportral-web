import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../services/category.service";
import Swal from "sweetalert2";
import {QuizService} from "../../../../services/quiz.service";

@Component({
  selector: 'app-add-quizz',
  templateUrl: './add-quizz.component.html',
  styleUrls: ['./add-quizz.component.scss']
})
export class AddQuizzComponent implements OnInit {
  category: any;
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
  constructor(
    private categoryService: CategoryService,
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
   this.getAllCategory();
  }

  addQuiz(){

    if(this.quizz.title.trim()== '' || this.quizz.title == ''){
      Swal.fire("Quiz Title is Required!");
      return;
    }
    this.quizService.addQuiz(this.quizz).subscribe((res:any)=>{
      Swal.fire("Success","Successfully Added Quiz!")
    },(error)=>{
      Swal.fire("Failed!","Unable to Add Quiz!!")
    })
  }

  getAllCategory(){
   this.categoryService.getAllCategory().subscribe((res:any)=>{
     this.category = res;
   },error => {
     Swal.fire("Error","Unable to fetch category!! ");
   })
  }

}
