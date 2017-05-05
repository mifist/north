import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { User } from '../_models/index';

import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'app-training-applicant',
    template: `
	    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
		    <!-- Start training cents -->
		    <div class="form-wrap">
			    <h4>Учебные центы России</h4>
			    <form action="">
				    <div class="form-item --simple">
					    <div class="input--yoshiko">
						    <select class="field--yoshiko" id="input72" name="">
							    <option value="Москва">Москва</option>
							    <option value="Москва">Москва</option>
							    <option value="Москва">Москва</option>
						    </select>
						    <label class="label--yoshiko" for="input72">
											<span class="content--yoshiko" data-content="Выберите желаемую область:">
												Выберите желаемую область:
											</span>
						    </label>
					    </div>
				    </div>
				    <div class="form-item --simple">
					    <div class="input--yoshiko">
						    <select class="field--yoshiko" id="input73" name="">
							    <option value="Москва">Москва</option>
							    <option value="Москва">Москва</option>
							    <option value="Москва">Москва</option>
						    </select>
						    <label class="label--yoshiko" for="input73">
											<span class="content--yoshiko" data-content="Выберите желаемый город:">
												Выберите желаемый город:
											</span>
						    </label>
					    </div>
				    </div>
				    <button href="#" class="btn _large">Подобрать</button>
			    </form>
		    </div><!-- End training cents -->
		
		    <div class="form-wrap">
			    <h6>Учебный центр "любой"</h6>
			    <div class="training__address">
				    <p>Адрес:</p>
				    <p>г. Усинск, ул. Нефтянников, 33</p>
			    </div>
			    <div class="training__tel">
				    <p>Телефон:</p>
				    <ul>
					    <li><a href="tel:+7(912)9568035">+7(912)956 80 35</a></li>
					    <li><a href="tel:+7(82144)29987">+7(82144)2 99 87</a></li>
					    <li><a href="tel:+7(82144)64954">+7(82144)6 49 54</a></li>
					    <li><a href="tel:+7(82144)68035">+7(82144)6 80 35</a></li>
					    <li><a href="tel:+7(82144)27744">+7(82144)2 77 44</a></li>
				    </ul>
			    </div>
			    <div class="training__watch">
				    <p>Часы работы:</p>
				    <p>Пн. - Пт.: 9:00 - 18:00</p>
				    <p>Перерыв: 13:00 - 14:00</p>
			    </div>
		    </div>
	
	    </div>
	`
})
export class TrainingApplicantComponent implements OnInit {
	model: any = {};
	currentUser: User;
	loading = false;
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