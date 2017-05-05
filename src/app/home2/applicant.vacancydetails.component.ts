import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { User } from '../_models/index';

import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'app-vacancy-details-applicant',
    template: `
	    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
		    <!-- Start vaccine application -->
			
			<article class="form-wrap 2222">
				<header class="wrap__name">
					<div class="row name__line">
						<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<h5>ООО "НЕФТЕГАЗСТРОЙ"</h5>
						</div>
						<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<div class="wrap__city"><span>г. Усинск</span></div>
						</div>
						<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<div class="wrap__date"><span>Дата:</span> 28.01.2017</div>
						</div>
				
					</div>
				
					<h6>Помощник бурильщика</h6>
			
				</header>
				
				<app-inf-vacancy-appl></app-inf-vacancy-appl>
				
			    <div class="wrap__text">
				    <p>Some text</p>
			    </div>
				
				<app-button-applicant></app-button-applicant>
				
		    </article><!-- End vaccine application -->
		
		
		    <!-- Start about company -->
		    <div class="form-wrap">
			    <div class="wrap__more">
				    <div class="more__photo">
					    <h4>фото к вакансии</h4>
					    <div class="row">
						    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 photo__item">
							    <a href="#">
								    <img src="../assets/images/photo/39.jpg" alt="Test">
							    </a>
						    </div>
						    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 photo__item">
							    <a href="#">
								    <img src="../assets/images/photo/309fddb0802d16-774x320.jpg" alt="Test">
							    </a>
						    </div>
						    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 photo__item">
							    <a href="#">
								    <img src="../assets/images/photo/445175.jpg" alt="Test">
							    </a>
						    </div>
						    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 photo__item">
							    <a href="#">
								    <img src="../assets/images/photo/234880563.jpg" alt="Test">
							    </a>
						    </div>
					    </div>
				    </div>
				    <div class="more__video">
					    <h4>Видео о компании</h4>
					    <div class="row">
						    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 video__item">
							    <img src="../assets/images/photo/1310256_source.jpg" alt="Test">
						    </div>
					    </div>
				    </div>
				    <div class="more__about">
					    <h4>Описание компании</h4>
					    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dolore eos et facilis incidunt ipsum itaque labore, quos saepe, sint, sit sunt suscipit? Consequuntur cum esse quae quam ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dolore eos et facilis incidunt ipsum itaque labore, quos saepe, sint, sit sunt suscipit? Consequuntur cum esse quae quam ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dolore eos et facilis incidunt ipsum itaque labore, quos saepe, sint, sit sunt suscipit? Consequuntur cum esse quae quam ratione.</p>
					    <ol>
						    <li>Item</li>
						    <li>Item</li>
						    <li>Item</li>
						    <li>Item</li>
						    <li>Item</li>
					    </ol>
					    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dolore eos et facilis incidunt ipsum itaque labore, quos saepe, sint, sit sunt suscipit? Consequuntur cum esse quae quam ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dolore eos et facilis incidunt ipsum itaque labore, quos saepe, sint, sit sunt suscipit? Consequuntur cum esse quae quam ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem dolore eos et facilis incidunt ipsum itaque labore, quos saepe, sint, sit sunt suscipit? Consequuntur cum esse quae quam ratione.</p>
				    </div>
			    </div>
		    </div><!-- End about company -->
	    </div>
	`
})
export class VacancyDetailsApplicantComponent implements OnInit {
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