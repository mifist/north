import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-menu-area-employer',
    template: `
	    <ul class="menu-area">
		    <li><a class="btn _large active" [routerLink]="['/home' ]">Карточка компании</a></li>
		    <li><a class="btn _large" href="vaccine_create--employer.html">Создать вакнсию</a></li>
		    <li><a class="btn _large" href="vaccine-employer.html">Мои вакансии<span class="badge">42</span></a> </li>
		    <li><a class="btn _large" href="choice-pay.html">Оплатить абонемент</a></li>
		    <li><a class="btn _large --off" href="#">Черный список соискателей</a></li>
		    <li><a class="btn _large" href="question.html">Вопросы к администрации сайта</a></li>
		    <li><a class="btn _large" href="wishes.html">Пожелания по улучшению сайта</a></li>
		    <li><a class="btn _large --off" href="#">Чат с соискателями</a></li>
	    </ul>
    `
})

export class MenuEmployerComponent {
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: ActivatedRoute) { }
}