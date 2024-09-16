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
  constructor(private activatedRoute:ActivatedRoute,
              private quizService: QuizService,
              private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.catId = params['catId'];
      if(this.catId ==0){
        this.quizService.getAllQuiz().subscribe((res:any) =>{
          this.quizzes = res;
          console.log("All quizzes:", this.quizzes);
        },(error)=>{
          console.error("unable to fetch quiz!!");
        })
      } else{
        this.quizzes=[];
      }
    })
  }

  onCategoryQuiz(id:any){
   this.router.navigate(['/user-dashboard/load-quiz'],{
     queryParams:{
       catId: id
     }
   })
  }

}
