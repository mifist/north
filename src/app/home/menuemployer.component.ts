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
			<li><a 
					class="btn _large" 
					[routerLink]="[ 'home/:id/cabinet' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Карточка компании</a></li>
			<li><a 
					class="btn _large" 
					[routerLink]="[ 'home/:id/vaccine' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Создать вакнсию</a></li>
			<li><a 
					class="btn _large"
					[routerLink]="[ 'home/vaccine' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Мои вакансии<span class="badge">42</span></a> </li>
			<li><a 
					class="btn _large"
					[routerLink]="[ 'home/vaccine' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Оплатить абонемент</a></li>
			<li><a 
					class="btn _large --off"
					[routerLink]="[ 'home/vaccine' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Черный список соискателей</a></li>
			<li><a 
					class="btn _large"
					[routerLink]="[ 'home/vaccine' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Вопросы к администрации сайта</a></li>
			<li><a 
					class="btn _large"
					[routerLink]="[ 'home/vaccine' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Пожелания по улучшению сайта</a></li>
			<li><a 
					class="btn _large --off"
					[routerLink]="[ 'home/vaccine' ]"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact:true }">Чат с соискателями</a></li>
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