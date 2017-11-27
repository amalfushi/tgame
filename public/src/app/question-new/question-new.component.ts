import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { Question } from '../question';
import { Answer } from '../answer';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})
export class QuestionNewComponent implements OnInit {

  currentUser:User = new User();
  newQuestion:Question= new Question();
  correct:Answer = new Answer();
  incorrect1:Answer = new Answer();
  incorrect2:Answer = new Answer();
  
  constructor(
    private _userService: UserService,
    private _questionService: QuestionService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.setCurrentUser();
    this.correct.isCorrect = true;
    this.incorrect1.isCorrect = false;
    this.incorrect2.isCorrect = false;
  }

  setCurrentUser(){
    if(this._userService.getCurrentUser() == null){
      this._router.navigateByUrl("")
    } else {
      this.currentUser = this._userService.getCurrentUser();
    }
  }

  addQuestion(){
    this.newQuestion.answers = []
    this.newQuestion.answers.push(this.correct)
    this.newQuestion.answers.push(this.incorrect1)
    this.newQuestion.answers.push(this.incorrect2)
    // console.log(this.newQuestion);
    this._questionService.create(this.newQuestion, (res)=>{
      this.currentUser.canceled = false;
      this._router.navigateByUrl("/dashboard")
    })
  }

  cancel(){
    this.currentUser.canceled = true;
  }
}
