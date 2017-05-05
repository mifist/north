import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-menu-area-applicant',
    template: `
	<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
		<h4>Личный кабинет</h4>
	
		<ul class="menu-area">
			<li><button 
					class="btn _large" 
					[routerLink]="[ '/home2/00/cabinet_applicant' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Моя карточка</button></li>
			<li><button 
					class="btn _large" 
					[routerLink]="[ '/home2/00/vacancy_applicant' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Посмотреть вакансии</button></li>
			<li><button 
					class="btn _large"
					[routerLink]="[ '/home2/00/showemployer' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Мои работодатели<span class="badge">42</span></button> </li>
			<li><button 
					class="btn _large"
					[routerLink]="[ 'assistance' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Юридическая помощь</button> </li>
			<li><button 
					class="btn _large"
					[routerLink]="[ '/home2/00/subscription_applicant' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Оплатить абонемент</button></li>
			<li><button 
					disabled
					class="btn _large --off"
					[routerLink]="[ '' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Черный список работодателей</button></li>
			<li><button 
					class="btn _large"
					[routerLink]="[ '/home2/00/question_applicant' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Вопросы к администрации сайта</button></li>
			<li><button 
					class="btn _large"
					[routerLink]="[ '/home2/00/wishes_applicant' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Пожелания по улучшению сайта</button></li>		
			<li><button 
					class="btn _large"
					[routerLink]="[ 'training' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Учебные центры</button></li>
			<li><button
					disabled
					class="btn _large --off"
					[routerLink]="[ '' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Чат с работодателями</button></li>
		</ul>

	</div>
    `
})

export class MenuApplicantComponent {
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: ActivatedRoute) {}
}