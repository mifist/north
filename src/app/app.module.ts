import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { routing } from './app.routing';
import { AppConfig } from './app.config';


import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, DataService } from './_services/index';
import { Categores } from './_services/categores';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { ChoiceloginComponent } from './choicelogin/index';
import { RegisterApplicantComponent } from './registerapplicants/index';
import { ResumeApplicantComponent } from './resumeapplicants/index';
import { ChoiceCategoryComponent } from './choicecategory/index';
import { ChoiceCategoryStep2Component } from './choicecategory/index';
import { ChoiceCategoryStep3Component } from './choicecategory/index';
import { MenuEmployerComponent } from './home/index';
import { HeadEmployerComponent } from './home/index';
import { AreaEmployerComponent } from './home/employer.area.component';
import { VacancyEmployerComponent } from './home/employer. vacancy.component';
import { ShowvacancyEmployerComponent } from './home/employer.showvacancy.component';
import { SortingComponent } from './home/index';
import { PaginationComponent } from './home/index';
import { InfvacancyComponent } from './home/index';
import { ButtonemplComponent } from './home/index';
import { QuestionEmployerComponent } from './home/employer.question.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ChoiceloginComponent,
    RegisterApplicantComponent,
    ResumeApplicantComponent,
    ChoiceCategoryComponent,
    ChoiceCategoryStep2Component,
    ChoiceCategoryStep3Component,
    MenuEmployerComponent,
    HeadEmployerComponent,
    QuestionEmployerComponent,
    // определение дочерних маршрутов
    AreaEmployerComponent,
    VacancyEmployerComponent,
    ShowvacancyEmployerComponent,
    SortingComponent,
    PaginationComponent,
    InfvacancyComponent,
    ButtonemplComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

  ],
  providers: [
    AppConfig,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    DataService,
    Categores,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
