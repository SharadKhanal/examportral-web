import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../../services/quiz.service";
import {CategoryService} from "../../../../services/category.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {
  category: any;
  quizzId: any;
  quizz:any;

  constructor( private activatedRoute: ActivatedRoute,
               private quizService: QuizService,
               private categoryService: CategoryService,
               private router: Router) { }

  ngOnInit(): void {
   this.activatedRoute.queryParams.subscribe((res:any)=>{
     this.quizzId = res.id;
   });
   this.getQuizById();
   this.getAllCategory();
  }

  getQuizById(){
    this.quizService.getQuizById(this.quizzId).subscribe((res:any)=>{
      this.quizz = res;
    },error => {
      console.error(error)
    })
  }

  getAllCategory(){
    this.categoryService.getAllCategory().subscribe((res:any)=>{
      this.category = res;
    },error => {
      console.error(error);
    })
  }


  updateQuiz(){
  this.quizService.editQuiz(this.quizz).subscribe((res:any)=>{
    Swal.fire('Success!','Quiz Updated Successfully!');
    this.router.navigate(['/admin-dashboard/view-quizzes']);

  },error => {
    Swal.fire("Error!",'Failed to update Quiz!');
  })
  }
}
