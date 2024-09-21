import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent implements OnInit {
    qId:any
  quiz:any;
  constructor(private activatedRoute: ActivatedRoute,
              private quizService: QuizService,
              private router: Router) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
          this.qId = params['qId'];

          this.getQuizById(this.qId);
      });
  }

  getQuizById(id:any){
      this.quizService.getQuizById(id).subscribe((res:any)=>{
          this.quiz = res;
      },error => {
        console.error(error);
      })
  }

  starQuiz(){
    Swal.fire({
      icon:'info',
      title:'Do you want to start the quiz!',
      confirmButtonText: 'Start',
      showCancelButton:true,
    }).then(res => {
      if(res.isConfirmed){
        this.router.navigate(['/start-quiz/'+ this.qId])
      }
    })
  }

}
