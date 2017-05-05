import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { User } from '../_models/index';

import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'app-bill-employer',
    template: `
	    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
		    <!-- Start bill -->
		    <div class="form-wrap">
			    <h4>Абонентская плата для юридичиского лица</h4>
			    <div class="entry-meta">
				    <p>Публикация вакансий неограничено</p>
			    </div>
			    <div class="form-item --bill">
				    <div class="radio">
					    <input id="bill1" type="radio" name="bill1"
					           [(ngModel)]="model.bill1"
					           (blur)="blurel($event)"
					           #bill1="ngModel">
					    <label for="bill1">1 месяц - 8000,00 рублей</label>
				
				    </div>
				    <div class="radio">
					    <input id="bill2" type="radio" name="bill2"
					           [(ngModel)]="model.bill2"
					           (blur)="blurel($event)"
					           #bill2="ngModel">
					    <label for="bill2">3 месяца - 8000,00 рублей</label>
				    </div>
				    <div class="radio">
					    <input id="bill3" type="radio" name="bill3"
					           [(ngModel)]="model.bill3"
					           (blur)="blurel($event)"
					           #bill3="ngModel">
					    <label for="bill3">6 месяцев - 8000,00 рублей</label>
				    </div>
				    <div class="radio">
					    <input id="bill4" type="radio" name="bill4"
					           [(ngModel)]="model.bill4"
					           (blur)="blurel($event)"
					           #bill4="ngModel">
					    <label for="bill4">12 месяцев - 8000,00 рублей</label>
				    </div>
			    </div>
				<button class="btn _large">Сформировать счет</button>
		    </div><!-- End bill -->
	
	    </div>
	`
})
export class BillEmployerComponent implements OnInit {
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