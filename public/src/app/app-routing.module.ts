import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionNewComponent } from './question-new/question-new.component';
import { TriviaShowComponent } from './trivia-show/trivia-show.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "new", component: QuestionNewComponent},
  {path: "lets_play", component: TriviaShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
