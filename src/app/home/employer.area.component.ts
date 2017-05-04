import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { User } from '../_models/index';

import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'app-area-employer',
    template: `		
		<!-- Start Private Area -->
		<div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
			<div class="row">
				<div class="col-xs-12 12 col-md-12 col-lg-12">
					<!-- Photo -->
					<div class="form-wrap">
						<h5>Логотип компании </h5>
						<div class="form-image logo">
							<img src="../assets/images/images.jpg" alt="Logotype">
						</div>
						<a class="btn _large --download">Изменить ЛОГОТИП</a>
					</div>
					<!-- Start Full width form -->
					<div class="form-wrap">
						<h5>Основные данные компании</h5>
						<form class="" action=""><!-- Start form -->
						
							<div class="form-item --simple">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="formown" type="text"
										   (blur)="blurelCheck($event)"
										   name="formown"
										   [(ngModel)]="model.formown">
									<label class="label--yoshiko" for="formown">
									<span class="content--yoshiko" data-content="ФОРМА СОБСТВЕННОСТИ:">
										Форма собственности:
									</span>
									</label>
								</div>
							</div>
						
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="input13" type="text"
										   (blur)="blurelCheck($event)"
										   name="firstName"
										   [(ngModel)]="model.firstName">
									<label class="label--yoshiko" for="input13">
									<span class="content--yoshiko" data-content="НАЗВАНИЕ ЮРИДИЧЕСКОГО ЛИЦА">
										Название юридического лица
									</span>
									</label>
								</div>
							</div>
						
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="input14" type="text"
										   (blur)="blurelCheck($event)"
										   name="username"
										   [(ngModel)]="model.username">
									<label class="label--yoshiko" for="input14">
									<span class="content--yoshiko" data-content="ИНН">
										ИНН (Ваш личный логин)
									</span>
									</label>
								</div>
							</div>
						
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="input15" type="text"
										   (blur)="blurelCheck($event)"
										   name="kpp"
										   [(ngModel)]="model.kpp">
									<label class="label--yoshiko" for="input15">
									<span class="content--yoshiko" data-content="КПП">
										КПП
									</span>
									</label>
								</div>
							</div>
						
							<div class="form-item">
								<div class="input--yoshiko">
									<input type="password" class="form-control field--yoshiko" id="password"
										   (blur)="blurelCheck($event)"
										   name="password"
										   [(ngModel)]="model.password" />
									<label class="label--yoshiko" for="password">
								<span class="content--yoshiko" data-content="ПАРОЛЬ">
									Пароль
								</span>
									</label>
								</div>
							</div>
						</form><!-- End form -->
					</div>
				
					<div class="form-wrap">
						<h5>Юридический адрес</h5>
						<form class="place--main" action=""><!-- Start form -->
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="cityIndex" type="number"
										   [(ngModel)]="model.cityIndex"
										   (blur)="blurelCheck($event)"
										   name="cityIndex">
									<label class="label--yoshiko" for="cityIndex">
									<span class="content--yoshiko" data-content="ИНДЕКС">
										Индекс
									</span>
									</label>
								</div>
							</div>
						
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="cityRegion" type="text"
										   (blur)="blurelCheck($event)"
										   name="cityRegion"
										   [(ngModel)]="model.cityRegion">
									<label class="label--yoshiko" for="cityRegion">
									<span class="content--yoshiko" data-content="ОБЛАСТЬ">
										Область
									</span>
									</label>
								</div>
							</div>
						
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="city" type="text"
										   (blur)="blurelCheck($event)"
										   name="city"
										   [(ngModel)]="model.city">
									<label class="label--yoshiko" for="city">
									<span class="content--yoshiko" data-content="ГОРОД / ДЕРЕВНЯ">
										Город / Деревня
									</span>
									</label>
								</div>
							</div>
						
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="cityAddress" type="text"
										   (blur)="blurelCheck($event)"
										   name="cityAddress"
										   [(ngModel)]="model.cityAddress">
									<label class="label--yoshiko" for="cityAddress">
									<span class="content--yoshiko" data-content="АДРЕС">
										Адрес
									</span>
									</label>
								</div>
							</div>
						</form><!-- End form -->
					</div>
					<div class="form-wrap">
						<div class="checkbox checked">
							<input id="cityCheck" type="checkbox"
								   (blur)="blurelCheck($event)"
								   name="cityCheck"
								   [(ngModel)]="model.cityCheck">
							<label for="cityCheck">Совпадает с юридическим адресом</label>
						</div>
						<h5>Почтовый адрес</h5>
						<form class="place--second" action=""><!-- Start form -->
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="postIndex" type="number"
										   (blur)="blurelCheck($event)"
										   name="postIndex"
										   [(ngModel)]="model.postIndex">
									<label class="label--yoshiko" for="postIndex">
									<span class="content--yoshiko" data-content="ИНДЕКС">
										Индекс
									</span>
									</label>
								</div>
							</div>
						
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="postRegion" type="text"
										   (blur)="blurelCheck($event)"
										   name="postRegion"
										   [(ngModel)]="model.postRegion">
									<label class="label--yoshiko" for="postRegion">
									<span class="content--yoshiko" data-content="ОБЛАСТЬ">
										Область
									</span>
									</label>
								</div>
							</div>
						
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="postCity" type="text"
										   (blur)="blurelCheck($event)"
										   name="postCity"
										   [(ngModel)]="model.postCity">
									<label class="label--yoshiko" for="postCity">
									<span class="content--yoshiko" data-content="ГОРОД / ДЕРЕВНЯ">
										Город / Деревня
									</span>
									</label>
								</div>
							</div>
						
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="postAddress" type="text"
										   (blur)="blurelCheck($event)"
										   name="postAddress"
										   [(ngModel)]="model.postAddress">
									<label class="label--yoshiko" for="postAddress">
									<span class="content--yoshiko" data-content="АДРЕС">
										Адрес
									</span>
									</label>
								</div>
							</div>
						</form><!-- End form -->
					</div>
					<div class="form-wrap">
						<h5>Ответственное лицо</h5>
						<form class="responsible-person" action=""><!-- Start form -->
							<div class="row">
								<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<div class="form-item">
										<div class="input--yoshiko">
											<input class="field--yoshiko" id="bailee" type="text"
												   (blur)="blurelCheck($event)"
												   name="bailee"
												   [(ngModel)]="model.bailee">
											<label class="label--yoshiko" for="bailee">
											<span class="content--yoshiko" data-content="И.Ф.О.">
												И.Ф.О.
											</span>
											</label>
										</div>
									</div>
								
									<div class="form-item">
										<div class="input--yoshiko">
											<input class="field--yoshiko" id="baileephone" type="tel"
												   (blur)="blurelCheck($event)"
												   name="baileephone"
												   [(ngModel)]="model.phone">
											<label class="label--yoshiko" for="baileephone">
											<span class="content--yoshiko" data-content="ТЕЛЕФОН">
												Телефон
											</span>
											</label>
										</div>
									</div>
								
									<div class="form-item">
										<div class="input--yoshiko">
											<input class="field--yoshiko" id="postEmail" type="email"
												   (blur)="blurelCheck($event)"
												   name="postEmail"
												   [(ngModel)]="model.postEmail"
											>
											<label class="label--yoshiko" for="postEmail">
											<span class="content--yoshiko" data-content="E-mail">
												E-mail
											</span>
											</label>
										</div>
									</div>
								
									<div class="form-item">
										<div class="input--yoshiko">
											<input class="field--yoshiko" id="accounting" type="text"
												   (blur)="blurelCheck($event)"
												   name="accounting"
												   [(ngModel)]="model.accounting">
											<label class="label--yoshiko" for="accounting">
											<span class="content--yoshiko" data-content="ТЕЛЕФОН">
												Контакты бухгалтерии
											</span>
											</label>
										</div>
									</div>
									<div class="form-item">
										<div class="input--yoshiko">
									<textarea class="field--yoshiko" id="infAbout"
											  (blur)="blurelCheck($event)"
											  name="infAbout"
											  [(ngModel)]="model.infAbout" >
										
									</textarea>
											<label class="label--yoshiko" for="infAbout">
											<span class="content--yoshiko" data-content="Информация о компании (будет отображаться для Соискателей)">
												Информация о компании
											</span>
											</label>
										</div>
									</div>
								</div>
							</div>
					
						</form><!-- End form -->
					</div>
					<!-- End Full width form -->
				</div>
			</div><!-- End row -->
		
			<div class="row"><!-- Start row -->
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<!-- Start subscrybe -->
					<h5>Отметьте сообщения которые желаете получать по почте</h5>
					<div class="form-item --subscrybe">
						<div class="checkbox">
							<input id="checkbox7" type="checkbox" name="" value="">
							<label for="checkbox7">Новости сайта</label>
						</div>
						<div class="checkbox">
							<input id="checkbox9" type="checkbox" name="" value="">
							<label for="checkbox9">Уведомления</label>
						</div>
						<div class="checkbox">
							<input id="checkbox10" type="checkbox" name="" value="">
							<label for="checkbox10">Напоминания</label>
						</div>
					</div>
				</div><!-- End subscrybe -->
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<!-- Start download video and photo -->
					<h5>Вы можете добавить до 3-х видеороликов</h5>
					<div class="form-item --download-file">
						<div class="main-item">
							<div class="form-item --simple">
								<h6>Загрузить видео</h6>
								<div class="input--yoshiko file-form">
									<label for="input32"></label>
									<button type="button" name="" value="" class="btn _small --file">Выбрать</button>
									<input id="input32" class="field--yoshiko" type="file" name="fileupload" value="fileupload" onchange="getName(this.value);">
								</div>
								<span class="about-input --red">*Видеоролики будут видны Соискателям.</span>
							</div>
						</div>
						<div class="file-item">
							<!-- файлы грузяться сюда -->
							<div class="item-field">
								<div id="fileformlabel"></div>
								<i class="mbri-close --close"></i>
							</div>
							<div class="item-field">
								<div id="fileformlabel"></div>
								<i class="mbri-close --close"></i>
							</div>
						</div>
					</div>
					<h5>Вы можете добавить до 5-ти фотографий</h5>
					<div class="form-item --download-file">
						<div class="main-item">
							<div class="form-item --simple">
								<h6>Загрузить фото</h6>
								<div class="input--yoshiko file-form">
									<label for="input29"></label>
									<button type="button" name="" value="" class="btn _small --file">Выбрать</button>
									<input id="input29" class="field--yoshiko" type="file" name="fileupload" value="fileupload" onchange="getName(this.value);">
								</div>
								<span class="about-input --red">*Фотографии будут видны Соискателям.</span>
							</div>
						</div>
						<div class="file-item">
							<!-- файлы грузяться сюда -->
							<div class="item-field">
								<div id="fileformlabel"></div>
								<i class="mbri-close --close"></i>
							</div>
							<div class="item-field">
								<div id="fileformlabel"></div>
								<i class="mbri-close --close"></i>
							</div>
						</div>
					</div>
				</div><!-- End download video and photo -->
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<a href="#finish" class="btn _large">Изменить</a>
				</div><!-- End button -->
			</div><!-- End row -->
		</div>
		<!-- End Private Area -->
	`
})

export class AreaEmployerComponent implements OnInit {
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