import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { User } from '../_models/index';

import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'app-subscription-applicant',
    template: `
	    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
		    <!-- Start choice pay -->
		    <article class="form-wrap">
			    <footer class="wrap__button">
				    <div class="row">
					    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						    <a [routerLink]="[ 'bill' ]" class="btn _large">Выписать счет</a>
					    </div>
					    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						    <a [routerLink]="[ 'onlinebill' ]" class="btn _large">Онлайн оплата</a>
					    </div>
				    </div>
			    </footer>
		    </article><!-- End choice pay -->
	
	    </div>
	`
})
export class SubscriptionApplicantComponent implements OnInit {
	model: any = {};
	loading = false;
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