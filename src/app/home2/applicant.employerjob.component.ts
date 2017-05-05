import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { User } from '../_models/index';

import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'app-employer-all-job-applicant',
    template: `
	    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
		
		   
		    <app-title-job-applicant></app-title-job-applicant>
		    <h3 class="title-details">Все вакансии этого работодателя на которые Вы откликнулись</h3>
		
		    <!-- Start applicant - about employer works -->
		    <article class="form-wrap">
			    <header class="wrap__name">
				    <div class="row wrap__line">
					    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
						    <h6>Помощник бурильщика</h6>
					    </div>
					    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
						    <div class="wrap__city"><span>г. Усинск</span></div>
					    </div>
					    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
						    <div class="wrap__date"><span>Дата:</span> 28.01.2017</div>
					    </div>
				    </div>
			    </header>
				
			    <app-inf-employer-job-appl></app-inf-employer-job-appl>
				
			    <app-button-job-applicant></app-button-job-applicant>
				
		    </article><!-- End applicant - about employer works -->
		
		
		    <app-pagination></app-pagination>
			
	    </div>
	`
})
export class EmployerJobApplicantComponent implements OnInit {
	model: any = {};
	currentUser: User;
	users: User[] = [];
	private timer;
	constructor(
		private router: Router,
		private userService: UserService,
		private alertService: ActivatedRoute) {
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		/*console.log(this.currentUser);*/
	}
	blurelCheck(el: any) {
		/*console.log(this.model);*/
		if (el.target.value.trim() === '') {
			el.target.parentNode.classList.remove('input--filled');
		}
		else {
			el.target.parentNode.classList.add('input--filled');
		}
		/* this.loadel('input14');*/
	}
	loadel(ss: string) {
		/* alert(ss);
		 console.log((<HTMLInputElement>document.getElementById(ss)).value);*/
		let yyy: HTMLInputElement;
		if ((<HTMLInputElement>document.getElementById(ss)).value.trim() === '') {
			/* el.parentElement.classList.remove('input--filled');*/
			document.getElementById(ss).parentElement.classList.remove('input--filled');
		}
		else {
			/* el.parentElement.classList.add('input--filled');*/
			document.getElementById(ss).parentElement.classList.add('input--filled');
		}
	}
	ngOnInit() {
		this.loadAllUsers();
		this.loadUser(this.currentUser._id);
		/*  this.loadel('input14');
		 document.getElementById('input14').textContent
		 document.getElementById('input14').parentElement.classList.add('input--filled');
		 document.getElementById('input15').parentElement.classList.add('input--filled');
		 el.target.parentNode.classList.add('input--filled');
		 el.target.focus();id = "input14"
		 console.log(this.model)*/
	}
	ngAfterViewInit() {
		this.timer = setTimeout(() => this.timerf(), 500);
	}
    timerf() {
        /*
		this.loadel('formown');
		this.loadel('input13');
		this.loadel('input14');
		this.loadel('input15');
		this.loadel('password');
		this.loadel('cityIndex');
		this.loadel('cityRegion');
		this.loadel('city');
		this.loadel('cityAddress');
		this.loadel('postIndex');
		this.loadel('postRegion');
		this.loadel('postCity');
		this.loadel('postAddress');
		this.loadel('bailee');
		this.loadel('baileephone');
		this.loadel('postEmail');
		this.loadel('accounting');
		this.loadel('infAbout');
        */
	}
	deleteUser(_id: string) {
		this.userService.delete(_id).subscribe(() => { this.loadAllUsers(); });
	}
	private loadAllUsers() {
		this.userService.getAll().subscribe(users => { this.users = users; });

	}
	private loadUser(_id: string) {
		this.userService.getById(_id).subscribe(user => { this.model = user; });

	}
}