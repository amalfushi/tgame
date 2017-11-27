import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser:User =new User();
  users: User[];

  constructor(
    private _userService: UserService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.setCurrentUser();
    this.getUsers()
  }

  getUsers(){
    this._userService.getAll((users)=> this.users = users);
  }

  setCurrentUser(){
    if(this._userService.getCurrentUser() == null){
      this._router.navigateByUrl("")
    } else {
      this.currentUser = this._userService.getCurrentUser();
    }
  }

  logout(){
    this.currentUser= null;
    this._userService.logout(()=>{this._router.navigateByUrl("")})
  }
}
