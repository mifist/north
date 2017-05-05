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
import { VacancyEmployerComponent } from './home/employer.vacancy.component';
import { ShowvacancyEmployerComponent } from './home/employer.showvacancy.component';
import { SortingComponent } from './home/index';
import { PaginationComponent } from './home/index';
import { InfvacancyComponent } from './home/index';
import { ButtonemplComponent } from './home/index';
import { QuestionEmployerComponent } from './home/employer.question.component';
import { WishesEmployerComponent } from './home/employer.wishes.component';
import { BillEmployerComponent } from './home/employer.bill.component';
import { OnlinebillEmployerComponent } from './home/employer.onlinebill.component';
import { SubscriptionEmployerComponent } from './home/employer.subscription.component';
import { DetailsEmployerComponent } from './home/employer.details.component';
import { ApplicantlistComponent } from './home/index';
import { CardapplEmployerComponent } from './home/employer.cardapplicantempl.component';

// Applicants
import { BillApplicantComponent } from './home2/applicant.bill.component';
import { OnlinebillApplicantComponent } from './home2/applicant.onlinebill.component';
import { SubscriptionApplicantComponent } from './home2/applicant.subscription.component';
import { QuestionApplicantComponent } from './home2/applicant.question.component';
import { WishesApplicantComponent } from './home2/applicant.wishes.component';
import { AreaApplicantComponent } from './home2/applicant.area.component';
import { VacancyApplicantComponent } from './home2/applicant.vacancy.component';
import { ShowvemployerApplicantComponent } from './home2/applicant.showemployer.component';
import { DetailsApplicantComponent } from './home2/applicant.details.component';
import { InfvacancyapplComponent } from './home2/index';
import { InfEmployersApplicantComponent } from './home2/index';
import {  InfJobApplicantComponent } from './home2/index';
import { ButtonApplicantComponent } from './home2/index';
import { MenuApplicantComponent } from './home2/index';
import { HeadApplicantComponent } from './home2/index';
import { ButtonJobApplicantComponent } from './home2/index';
import { TitleJobApplicantComponent } from './home2/index';

import { Home2Component } from './home2/index';
import { SortingapplComponent } from './home2/index';
import { VacancyDetailsApplicantComponent } from './home2/applicant.vacancydetails.component';
import { EmployerJobApplicantComponent } from './home2/applicant.employerjob.component';
import { AssistanceApplicantComponent } from './home2/applicant.assistance.component';
import { TrainingApplicantComponent } from './home2/training.assistance.component';



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
    ApplicantlistComponent,
    // определение дочерних маршрутов
    AreaEmployerComponent,
    VacancyEmployerComponent,
    ShowvacancyEmployerComponent,
    SortingComponent,
    PaginationComponent,
    InfvacancyComponent,
    ButtonemplComponent,
    WishesEmployerComponent,
    BillEmployerComponent,
    OnlinebillEmployerComponent,
    SubscriptionEmployerComponent,
    DetailsEmployerComponent,
    CardapplEmployerComponent,
      // Applicant
    BillApplicantComponent,
    OnlinebillApplicantComponent,
    SubscriptionApplicantComponent,
    QuestionApplicantComponent,
    WishesApplicantComponent,
    AreaApplicantComponent,
    VacancyApplicantComponent,
    ShowvemployerApplicantComponent,
    DetailsApplicantComponent,
    InfvacancyapplComponent,
    ButtonApplicantComponent,
    MenuApplicantComponent,
    Home2Component,
    HeadApplicantComponent,
    SortingapplComponent,
    VacancyDetailsApplicantComponent,
    InfEmployersApplicantComponent,
    EmployerJobApplicantComponent,
    ButtonJobApplicantComponent,
    TitleJobApplicantComponent,
    InfJobApplicantComponent,
    AssistanceApplicantComponent
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
