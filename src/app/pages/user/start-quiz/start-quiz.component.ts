import { Component, OnInit } from '@angular/core';
import {LocationStrategy} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {QuestionService} from "../../../services/question.service";
import Swal from "sweetalert2";
import { Location } from '@angular/common';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss']
})
export class StartQuizComponent implements OnInit {
    quizid:any;
    question:any;
    marksGot=0;
    correctAnswer=0;
    attempted=0;
    isSubmitted=false;
    timer:any;
  constructor(private loacationSt: LocationStrategy,
              private activatedRoute: ActivatedRoute,
              private questionService: QuestionService,
              private router: Router) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.quizid = this.activatedRoute.snapshot.params['qId'];
    this.getQuiz();
  }

  getQuiz(){
    this.questionService.getAllQuizQuestion(this.quizid).subscribe((quiz) => {
      this.question = quiz;
      console.log(this.question)
      this.timer= this.question?.length * 2 *60;
      // this.question.forEach((q:any) =>{
      //   q['givenAnswer']='';
      // });
      this.startTimer();
    })
  }
  preventBackButton():any{
    history.pushState(null,location.href);
    this.loacationSt.onPopState(()=>{
      history.pushState(null,location.href);
    });
  }

  submitQuiz   (){
    Swal.fire({
      icon:'info',
      title:'Do you want to submit  the quiz!',
      confirmButtonText: 'Submit',
      denyButtonText: 'No',
      showCancelButton:true,
    }).then((e:any) =>{
      if(e.isConfirmed){
        this.evalQuiz();
      }
    })
  }
  onBack(){
    this.router.navigate(['/user-dashboard/0']);
  }
  startTimer(){
   let t = window.setInterval(()=>{
     if(this.timer<=0){
       this.evalQuiz();
       clearInterval(t);
     } else{
       this.timer--;
     }
   },1000);
  }
   getFormattedTime(){
     let minutes = Math.floor(this.timer / 60);
     let seconds = this.timer - minutes * 60;
   return `${minutes} min : ${seconds} seconds`
   }

   evalQuiz(){
     this.isSubmitted=true;
     // this.question.forEach((q:any) =>{
     //   if(q.answer == q.givenAnswer){
     //     this.correctAnswer++;
     //     let singleQuestionMarks= this.question[0]?.quiz?.maxMarks/ this.question?.length;
     //     this.marksGot += singleQuestionMarks;
     //   }
     //   if(q.givenAnswer.trim()!= ''){
     //     this.attempted++;
     //   }
     // })


     this.questionService.evalQuestion(this.question).subscribe((res:any) =>{
       this.attempted = res?.attempted;
       this.marksGot = res?.marksGot;
       this.correctAnswer = res?.correctAnswer;
       console.log("Respoinse:", res);
     })
   }
}
