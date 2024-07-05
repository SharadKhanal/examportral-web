import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {QuizService} from "../../../../services/quiz.service";
import Swal from "sweetalert2";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.scss']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes:any;
  constructor( private router:Router,
               private quizService: QuizService,
               private modalService: NgbModal) { }

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

  deleteQuizz(template:any){
      this.modalService.open(template);
  }
  onDelete(id:any){
    Swal.fire({
      icon:'info',
      title:'Are you sure to delete!',
      confirmButtonText: 'Delete',
        showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        this.quizService.deleteQuiz(id).subscribe((res:any)=>{
          Swal.fire("Success",'Successfully Deleted the Quizz!!')
          this.modalService.dismissAll();
          this.getAllQuiz();
        },error => {
          Swal.fire("Failed","Unable to Delete Quiz!!");
        })
      }
    })
  }
}
