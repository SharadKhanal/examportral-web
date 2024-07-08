import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {HttpClientModule} from "@angular/common/http";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import {SideBarComponent} from "./pages/admin/side-bar/side-bar.component";
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddCategoryComponent } from './pages/admin/category/add-category/add-category.component';
import { ViewCategoryComponent } from './pages/admin/category/view-category/view-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewQuizzesComponent } from './pages/admin/quizz/view-quizzes/view-quizzes.component';
import { AddQuizzComponent } from './pages/admin/quizz/add-quizz/add-quizz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { EditQuizComponent } from './pages/admin/quizz/edit-quiz/edit-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomePageComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SideBarComponent,
    WelcomeComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    ViewQuizzesComponent,
    AddQuizzComponent,
    EditQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    NgbModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
