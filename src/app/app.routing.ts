import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { ChoiceloginComponent } from './choicelogin/index';
import { RegisterApplicantComponent } from './registerapplicants/index';
import { ResumeApplicantComponent } from './resumeapplicants/index';
import { ChoiceCategoryComponent } from './choicecategory/index';
import { ChoiceCategoryStep2Component } from './choicecategory/index';
import { ChoiceCategoryStep3Component } from './choicecategory/index';

// импорт дочерних маршрутов
import { AreaEmployerComponent } from './home/employer.area.component';
import { VacancyEmployerComponent } from './home/employer.vacancy.component';
import { ShowvacancyEmployerComponent } from './home/employer.showvacancy.component';
import { QuestionEmployerComponent } from './home/employer.question.component';
import { WishesEmployerComponent } from './home/employer.wishes.component';
import { BillEmployerComponent } from './home/employer.bill.component';
import { OnlinebillEmployerComponent } from './home/employer.onlinebill.component';
import { SubscriptionEmployerComponent } from './home/employer.subscription.component';
import { DetailsEmployerComponent } from './home/employer.details.component';
import { CardapplEmployerComponent } from './home/employer.cardapplicantempl.component';

// Applicants
import { BillApplicantComponent } from './home2/applicant.bill.component';
import { OnlinebillApplicantComponent } from './home2/applicant.onlinebill.component';
import { SubscriptionApplicantComponent } from './home2/applicant.subscription.component';
import { QuestionApplicantComponent } from './home2/applicant.question.component';
import { WishesApplicantComponent } from './home2/applicant.wishes.component';
import { AreaApplicantComponent } from './home2/applicant.area.component';
import { VacancyApplicantComponent } from './home2/applicant.vacancy.component';

// определение дочерних маршрутов для работодателя
const itemRoutes: Routes = [
    { path: 'cabinet', component:  AreaEmployerComponent },
    { path: 'vacancy', component:  VacancyApplicantComponent },
    { path: 'vacancy', component:  VacancyEmployerComponent },
    { path: 'showvacancy', component:  ShowvacancyEmployerComponent },
    { path: 'showvacancy/details', component:  DetailsEmployerComponent },
    { path: 'showvacancy/details/view_applicant', component:  CardapplEmployerComponent },
    { path: 'question', component:  QuestionEmployerComponent },
    { path: 'wishes', component:  WishesEmployerComponent },
    { path: 'subscription', component:  SubscriptionEmployerComponent },
    { path: 'subscription/bill', component:  BillEmployerComponent },
    { path: 'subscription/onlinebill', component:  OnlinebillEmployerComponent },
];
// определение дочерних маршрутов для соискателя
const itemRoutesAppl: Routes = [
    { path: 'cabinet_applicant', component:  AreaApplicantComponent },
    { path: 'vacancy_applicant', component:  VacancyApplicantComponent },
    /*{ path: 'showvacancy', component:  ShowvacancyEmployerComponent },
    { path: 'showvacancy/details', component:  DetailsEmployerComponent },
    { path: 'showvacancy/details/view_applicant', component:  CardapplEmployerComponent },*/
    { path: 'question_applicant', component:  QuestionApplicantComponent },
    { path: 'wishes_applicant', component:  WishesApplicantComponent },
    { path: 'subscription_applicant', component:  SubscriptionApplicantComponent },
    { path: 'subscription_applicant/bill', component:  BillApplicantComponent },
    { path: 'subscription_applicant/onlinebill', component:  OnlinebillApplicantComponent },
];
const appRoutes: Routes = [
   /* { path: '', component: HomeComponent, canActivate: [AuthGuard] },*/
    { path: '', redirectTo: '/home/0/cabinet', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'choicelogin', component: ChoiceloginComponent },
    { path: 'registerapplicants', component: RegisterApplicantComponent },
    { path: 'resumeapplicants', component: ResumeApplicantComponent },
    { path: 'choicecategory', component: ChoiceCategoryComponent },
    { path: 'step2/:id', component:  ChoiceCategoryStep2Component },
    { path: 'step3/:id', component:  ChoiceCategoryStep3Component },
    { path: 'home/', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home/:id', component: HomeComponent, canActivate: [AuthGuard] , children: itemRoutes },
    { path: 'home2/', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home2/:id', component: HomeComponent, canActivate: [AuthGuard] , children: itemRoutesAppl },



    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);