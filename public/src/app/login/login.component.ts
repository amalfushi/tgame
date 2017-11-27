import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User = new User();
  
  constructor(
    private _userService: UserService,
    private _router: Router,
  ) { }

  ngOnInit() {
    // this.newUser.name ="Dustin"
    // this.login();
  }

  login(){
    this._userService.login(this.newUser, (user)=>{
      if(user.errors){
        console.log("Shit's broke, yo")
      } else{
        this._router.navigateByUrl("dashboard");
      }
    });
  }
}
