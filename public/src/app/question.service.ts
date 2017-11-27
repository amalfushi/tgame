import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class QuestionService {

  constructor(private _http: Http) { }

  create(newQuestion, callback){
    console.log()
    this._http.post("/questions", newQuestion).subscribe(
      (res)=>{ callback(res.json()) },
      (err)=>{ console.log(err) }
    );
  }

  getThree(callback){
    this._http.get("/questions").subscribe(
      (res)=> { callback(res.json()) },
      (err)=> { console.log(err) }
    )
  }
}
