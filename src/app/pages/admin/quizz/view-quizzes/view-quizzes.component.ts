import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {QuizService} from "../../../../services/quiz.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.scss']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes:any;
  quizze=[
    {
      qId:34,
      title:'basic java',
      description:'he meaning of SPAM is unsolicited usually commercial messages (such as emails, text messages, or Internet postings) sent to a large number of recipients or .',
      maxMarks:'89',
      numberOfQuestions:'60',
      active:'',
      category:{
        title: 'programming'
      }
    },
    {
      qId:66,
      title:'basic cc',
      description:'he meaning of SPAM is unsolicited usually commercial messages (such as emails, text messages, or Internet postings) sent to a large number of recipients or .',
      maxMarks:'89',
      numberOfQuestions:'60',
      active:'',
      category:{
        title: 'programming'
      }

    }
  ]
  constructor( private router:Router,
               private quizService: QuizService) { }

  ngOnInit(): void {
    this.getAllQuiz();
  }

  getAllQuiz(){
    this.quizService.getAllQuiz().subscribe((res:any)=>{
      this.quizzes = res;
    },error => {
      Swal.fire("Error!","Unable to load quiz data!!");
    })
  }
  navigateToAddQuiz(){
    this.router.navigate(['/admin-dashboard/add-quizz'])
  }
}
