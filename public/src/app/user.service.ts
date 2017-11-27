import { Injectable } from '@angular/core';
import { User } from './user';
import { Http } from '@angular/http';
import { Router } from '@angular/router'

@Injectable()
export class UserService {

  currentUser:User = null;

  constructor(
    private _http: Http,
    private _router: Router
  ) { }

  login(newUser:User, callback){
    this._http.post("/users", newUser).subscribe(
      (res) => {
        const user = res.json();
        if(!user.errors){
          this.currentUser = user;
        }
        callback(user);
      },
      (err) => console.log(err)
    )
  }

  logout(callback){
    this._http.delete("/users");
    this.currentUser = null;
    callback();
  }
  
  getCurrentUser(){
    return this.currentUser;
  }

  getAll(callback){
    this._http.get("/users", callback).subscribe(
      (res)=>{
        console.log(res.json())
        callback(res.json())
      },
      (err)=>{ console.log(err)}
    )
  }

  grade(grade, callback){
    this._http.put(`/users/${grade}`, {}).subscribe(
      (res)=>{
        callback(res.json())
      },
      (err)=>{console.log(err)}
    )
  }

}
