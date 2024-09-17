import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.scss']
})
export class LoadQuizComponent implements OnInit {
  catId:any;
  quizzes:any;
  quizOfCategory:any;
  constructor(private activatedRoute:ActivatedRoute,
              private quizService: QuizService,
              private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.catId = params['catId'];
      console.log("cid: " + this.catId);
      if(this.catId != 0){
        console.log("Get category quiz")
        this.quizService.getQuizByCategory(this.catId).subscribe((res:any) =>{
          this.quizzes = res;
          console.log("Quizzes of category:", this.quizOfCategory);
        },(error)=>{
          console.error("Unable to fetch quiz of category!!");
        })

      }
      else{
        this.quizService.getAllQuiz().subscribe((res:any) =>{
          this.quizzes = res;
          console.log("All quizzes:", this.quizzes);
        },(error)=>{
          console.error("unable to fetch quiz!!");
        })
      }
    })
  }
  getAllQuizzesOfCategory(id:any){

  }

  onCategoryQuiz(id:any){
   this.router.navigate(['/user-dashboard/load-quiz'],{
     queryParams:{
       catId: id
     }
   })
  }

}
