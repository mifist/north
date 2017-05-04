﻿import { Routes, RouterModule } from '@angular/router';

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
import { VaccineEmployerComponent } from './home/employer.vaccine.component';

// определение дочерних маршрутов
const itemRoutes: Routes = [
    { path: 'cabinet', component:  AreaEmployerComponent},
    { path: 'vaccine', component:  VaccineEmployerComponent},
];

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'choicelogin', component: ChoiceloginComponent },
    { path: 'registerapplicants', component: RegisterApplicantComponent },
    { path: 'resumeapplicants', component: ResumeApplicantComponent },
    { path: 'choicecategory', component: ChoiceCategoryComponent },
    { path: 'step2/:id', component:  ChoiceCategoryStep2Component },
    { path: 'step3/:id', component:  ChoiceCategoryStep3Component },
    { path: 'home/', component:  HomeComponent },
    { path: 'home/:id', component:  HomeComponent, children: itemRoutes },



    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);