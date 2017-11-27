import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { Answer } from '../answer';

@Component({
  selector: 'app-trivia-show',
  templateUrl: './trivia-show.component.html',
  styleUrls: ['./trivia-show.component.css']
})
export class TriviaShowComponent implements OnInit {

  currentUser: User = new User();
  trivQuestions = [];
  answer1: boolean = null;
  answer2: boolean = null;
  answer3: boolean = null;
  total = 0;

  constructor(
    private _userService:UserService,
    private _questionService: QuestionService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.setCurrentUser();
    this.getQuestions();
  }

  setCurrentUser(){
    if(this._userService.getCurrentUser() == null){
      this._router.navigateByUrl("")
    } else {
      this.currentUser = this._userService.getCurrentUser();
    }
  }

  getQuestions(){
    this._questionService.getThree((questions)=> { 
      while(this.trivQuestions.length <3){
        let rand = Math.floor(Math.random()*questions.length)
        let temp = questions[questions.length-1];
        let cur = questions[rand];
        questions[rand] = temp;
        questions[questions.length-1];
        
        this.trivQuestions.push(cur);
        questions.pop();

        
      }
    })
  }

  grade(){
    if(this.answer1 == true){
      this.total++;
    }
    if(this.answer2 == true){
      this.total++;
    }
    if(this.answer3 == true){
      this.total++;
    }
    console.log(this.total)
    this._userService.grade(this.total, (res)=>{
      this.answer1 = false;
      this.answer2 = false;
      this.answer3 = false;
      this.currentUser.lastScore = this.total;
      this.total = 0;
      this._router.navigateByUrl("/dashboard")
    })
  }
}
