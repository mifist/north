import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { User } from '../_models/index';

import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'app-cardappl-employer',
    template: `		
		<!-- Start Private Area -->
		<div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
			<div class="row"><!-- Start row -->
				<h2 class="entry-title">КАРТОЧКА СОИСКАТЕЛЯ</h2>
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><!-- Start Form -->
					<div class="main-information form-wrap">
						<!-- Start Main Information -->
						<div class="row">
							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
								<div class="row">
									<div class="col-xs-12 col-sm-5 col-md-5 col-lg-5 view-photo">
										<img src="../assets/images/face.png" alt="Photo">
									</div>
									<div class="col-xs-12 col-sm-7 col-md-7 col-lg-7 view-name">
										<h6>Соломенко Иван Иванович</h6>
										<div class="view-pale">
											<div class="place-elem">Москва</div>
											<div class="place-elem">30 лет</div>
										</div>
									</div>
								</div><!-- End row -->
							</div>
							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
								<div class="row">
									<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
										<div class="row">
											<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
												<h5>Дата рождения:</h5>
											</div>
											<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
												<p>25.05.1989</p>
											</div>
										</div>
									</div>
									<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
										<h5>Личные данные:</h5>
									</div>
									<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
										<div class="row">
											<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
												<p>Телефон:</p>
											</div>
											<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
												<p>(099) 22 22 111</p>
											</div>
										</div>
										<div class="row">
											<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
												<p>E-mail:</p>
											</div>
											<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
												<p>someemail@mail.com</p>
											</div>
										</div>
										<div class="row">
											<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
												<p>ИНН:</p>
											</div>
											<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
												<p>someinn</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div><!-- End row -->
					</div><!-- End Main Information -->
					<div class="like-button">
						<!-- Start Like button -->
						<a href="#dislike" class="btn _small mbri-like --dislike">2</a>
						<a href="#" class="btn _small mbri-like --like">25</a>
					</div><!-- End Like button -->
					<div class="resume-view form-wrap">
						<!-- Start View resume -->
						<h5>Резюме</h5>
						
						<div class="resume-elem">
							<h6>Образование</h6>
							<div class="elem-text">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti expedita nemo nostrum perferendis rerum vero voluptatibus! Animi consequuntur, iure libero molestiae nam natus nulla odit, officiis perspiciatis sunt, vitae.</p>
							</div>
						</div>
						
						<div class="resume-elem">
							<h6>Предыдущие места раюоты</h6>
							<div class="elem-text">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti expedita nemo nostrum perferendis rerum vero voluptatibus! Animi consequuntur, iure libero molestiae nam natus nulla odit, officiis perspiciatis sunt, vitae.</p>
							</div>
						</div>
						
						<div class="resume-elem">
							<h6>Предыдущие места раюоты</h6>
							<div class="view-pale">
								<p>10 лет</p>
							</div>
						</div>
						
						<div class="resume-elem">
							<h6>Пожелания к будущей работе</h6>
							<div class="elem-text">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti expedita nemo nostrum perferendis rerum vero voluptatibus! Animi consequuntur, iure libero molestiae nam natus nulla odit, officiis perspiciatis sunt, vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti expedita nemo nostrum perferendis rerum vero voluptatibus! Animi consequuntur, iure libero molestiae nam natus nulla odit, officiis perspiciatis sunt, vitae.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti expedita nemo nostrum perferendis rerum vero voluptatibus! Animi consequuntur, iure libero molestiae nam natus nulla odit, officiis perspiciatis sunt, vitae.</p>
							</div>
						</div>
					</div><!-- End View resume -->
				</div><!-- End LEFT Form -->
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<!-- Start Certification view -->
					<h4>ДАННЫЕ ОБ АТТЕСТАЦИИ</h4>
					<div class="form-item --certifications">
						<div class="checkbox --checked --view">
							<input id="checkbox34" type="checkbox" name="" value="" readonly>
							<label readonly for="checkbox34">DIE Небольшие автобусы с прицепом</label>
							<button type="button" class="btn _small">ПОСМОТРЕТЬ</button>
						</div>
						<div class="checkbox --checked --view">
							<input id="checkbox35" type="checkbox" name="" value="" readonly>
							<label readonly for="checkbox35">DIE Небольшие автобусы с прицепом</label>
							<button type="button" class="btn _small">ПОСМОТРЕТЬ</button>
						</div>
						<div class="checkbox --checked --view">
							<input id="checkbox36" type="checkbox" name="" value="" readonly>
							<label readonly for="checkbox36">DIE Небольшие автобусы с прицепом</label>
							<button type="button" class="btn _small">ПОСМОТРЕТЬ</button>
						</div>
					</div>
				</div><!-- End Certification view -->
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<!-- Start Attestation view -->
					<h4>ДАННЫЕ ОБ АТТЕСТАЦИИ</h4>
					<div class="form-item --attestation">
						<div class="checkbox --checked">
							<input id="checkbox37" type="checkbox" name="" value="" readonly>
							<label readonly for="checkbox37">Д.1. Гидротехнические сооружения объектов
								промышленности</label>
						</div>
						<div class="checkbox --checked">
							<input id="checkbox38" type="checkbox" name="" value="" readonly>
							<label readonly for="checkbox38">Д.2. Гидротехнические сооружения объектов энергетики</label>
						</div>
						<div class="checkbox --checked">
							<input id="checkbox39" type="checkbox" name="" value="" readonly>
							<label readonly for="checkbox39">Д.3. Гидротехнические сооружения объектов водохозяйственного</label>
						</div>
					</div>
				</div><!-- End Attestation view -->
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div class="row">
						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<a href="vaccine-employer.html" class="btn btn_large">ПРИГЛАСИТЬ К СОБЕСЕДОВАНИЮ</a>
						</div>
						<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<a href="vaccine-employer.html" class="btn btn_large">ПРИГЛАСИТЬ НА РАБОТУ</a>
						</div>
					</div>
				</div>
			</div><!-- End row -->
		</div>
		<!-- End Private Area -->
	`
})

export class CardapplEmployerComponent implements OnInit {
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