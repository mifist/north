import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { User } from '../_models/index';

import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'app-showemployer-applicant',
    template: `
	    <!-- Start Show Vaccine -->
	    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
		    <app-sorting></app-sorting>
		    <!-- Start vaccine -->
		    <article class="form-wrap">
			    <header class="wrap__name">
				    <div class="row wrap__line">
					    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						    <h6>ООО "НЕФТЕГАЗСТРОЙ"</h6>
					    </div>
				    </div>
			    </header>
			
			    <app-inf-employer-appl></app-inf-employer-appl>
				
			    <div class="wrap__text">
				    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			    </div>
			
			    <footer class="wrap__button">
				    <div class="row">
					    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						    <div class="btn _large --event">
							    <span>Новых событий:</span> <span>2</span>
						    </div>
					    </div>
					    <div class="col-xs-12 col-sm-6 col-lg-6">
						    <a [routerLink]="[ 'all_job' ]" class="btn _large --like">Подробнее
						    </a>
					    </div>
				    </div>
			    </footer>
				
		    </article><!-- End vaccine -->
			
		    <app-pagination></app-pagination>
			
	    </div>
	    <!-- End Show Vaccine -->
	`
})
export class ShowvemployerApplicantComponent implements OnInit {
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