import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-menu-area-employer',
    template: `
	<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
		<h4>Личный кабинет</h4>
	
		<ul class="menu-area">
			<li><button 
					class="btn _large" 
					[routerLink]="[ '/home/0/cabinet' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Карточка компании</button></li>
			<li><button 
					class="btn _large" 
					[routerLink]="[ '/home/0/vacancy' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Создать вакнсию</button></li>
			<li><button 
					class="btn _large"
					[routerLink]="[ '/home/0/showvacancy' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Мои вакансии<span class="badge">42</span></button> </li>
			<li><button 
					class="btn _large"
					[routerLink]="[ '/home/0/vaccine' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Оплатить абонемент</button></li>
			<li><button 
					disabled
					class="btn _large --off"
					[routerLink]="[ '/home/0/vaccine' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Черный список соискателей</button></li>
			<li><button 
					class="btn _large"
					[routerLink]="[ '/home/0/question' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Вопросы к администрации сайта</button></li>
			<li><button 
					class="btn _large"
					[routerLink]="[ '/home/0/vaccine' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Пожелания по улучшению сайта</button></li>
			<li><button
					disabled
					class="btn _large --off"
					[routerLink]="[ '/home/0/vaccine' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Чат с соискателями</button></li>
		</ul>

	</div>
    `
})

export class MenuEmployerComponent {
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: ActivatedRoute) {}
}