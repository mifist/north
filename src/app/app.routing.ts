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
import { OnlinebillillEmployerComponent } from './home/employer.onlinebill.component';
import { SubscriptionEmployerComponent } from './home/employer.subscription.component';
import { DetailsEmployerComponent } from './home/employer.details.component';
import { CardapplEmployerComponent } from './home/employer.cardapplicantempl.component';

// определение дочерних маршрутов
const itemRoutes: Routes = [
    { path: 'cabinet', component:  AreaEmployerComponent },
    { path: 'vacancy', component:  VacancyEmployerComponent },
    { path: 'showvacancy', component:  ShowvacancyEmployerComponent },
    { path: 'showvacancy/details', component:  DetailsEmployerComponent },
    { path: 'showvacancy/details/view_applicant', component:  CardapplEmployerComponent },
    { path: 'question', component:  QuestionEmployerComponent },
    { path: 'wishes', component:  WishesEmployerComponent },
    { path: 'subscription', component:  SubscriptionEmployerComponent },
    { path: 'subscription/bill', component:  BillEmployerComponent },
    { path: 'subscription/onlinebill', component:  OnlinebillillEmployerComponent },
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



    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);