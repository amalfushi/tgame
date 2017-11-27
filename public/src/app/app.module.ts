import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TriviaShowComponent } from './trivia-show/trivia-show.component';
import { QuestionNewComponent } from './question-new/question-new.component';
import { AnswerService } from './answer.service';
import { QuestionService } from './question.service';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TriviaShowComponent,
    QuestionNewComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService, QuestionService, AnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
