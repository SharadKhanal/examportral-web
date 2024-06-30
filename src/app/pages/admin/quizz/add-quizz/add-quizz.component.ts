import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-quizz',
  templateUrl: './add-quizz.component.html',
  styleUrls: ['./add-quizz.component.scss']
})
export class AddQuizzComponent implements OnInit {
 category=[
   {
     cid:2,
     title:'programming'
   },
   {
     cid:5,
     title:'bd'
   },
   {
     cid:9,
     title:'abd'
   },
   {
     cid:2,
     title:'programming'
   },{
     cid:2,
     title:'programming'
   }
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
