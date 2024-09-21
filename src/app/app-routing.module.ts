import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./pages/signup/signup.component";
import {LoginComponent} from "./pages/login/login.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AdminDashboardComponent} from "./pages/admin/admin-dashboard/admin-dashboard.component";
import {UserDashboardComponent} from "./pages/user/user-dashboard/user-dashboard.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {WelcomeComponent} from "./pages/admin/welcome/welcome.component";
import {ViewCategoryComponent} from "./pages/admin/category/view-category/view-category.component";
import {AddCategoryComponent} from "./pages/admin/category/add-category/add-category.component";
import {ViewQuizzesComponent} from "./pages/admin/quizz/view-quizzes/view-quizzes.component";
import {AddQuizzComponent} from "./pages/admin/quizz/add-quizz/add-quizz.component";
import {EditQuizComponent} from "./pages/admin/quizz/edit-quiz/edit-quiz.component";
import {QuizQuestionComponent} from "./pages/admin/questions/quiz-question/quiz-question.component";
import {AddQuizQuestionsComponent} from "./pages/admin/questions/add-quiz-questions/add-quiz-questions.component";
import {EditQuestionComponent} from "./pages/admin/questions/edit-question/edit-question.component";
import {AdminGuard} from "./core/guard/admin.guard";
import {UserGuard} from "./core/guard/user.guard";
import {LoadQuizComponent} from "./pages/user/load-quiz/load-quiz.component";
import {InstructionComponent} from "./pages/user/instruction/instruction.component";
import {StartQuizComponent} from "./pages/user/start-quiz/start-quiz.component";

const routes: Routes = [
  {path: '',
  component: HomePageComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: "full"
  },
  // {
  //   path: 'user-dashboard',
  //   component: UserDashboardComponent,
  //   pathMatch: "full"
  // },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,canActivate:[AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path:'category',
        component: ViewCategoryComponent
      },
      {
        path:'add-cartegory',
        component: AddCategoryComponent
      },
      {
        path:'view-quizzes',
        component: ViewQuizzesComponent
      },

      {
        path:'add-quizz',
        component: AddQuizzComponent
      },
      {
        path:'edit-quizz',
        component: EditQuizComponent
      },
      {
        path:'view-quiz-questions',
        component: QuizQuestionComponent
      },
      {
        path:'add-quiz-questions',
        component: AddQuizQuestionsComponent
      },
      {
        path:'edit-questions',
        component: EditQuestionComponent
      }
    ]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate:[UserGuard],
    children:[
      {
        path:':catId',
        component: LoadQuizComponent,
      },
      {
        path:'instruction/:qId',
        component: InstructionComponent,
      },
    ]
  },
  {
    path:'start-quiz/:qId',
    component: StartQuizComponent,
    canActivate:[UserGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
