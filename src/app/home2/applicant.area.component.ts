import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { User } from '../_models/index';

import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'app-area-applicant',
    template: `		
		<!-- Start Private Area -->
		<div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
			<div class="row"><!-- Start row -->
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 left-card"><!-- Start Form -->
					<!-- Photo -->
					<div class="form-wrap">
						<h5>Фото профиля</h5>
						<div class="form-image">
							<img src="../assets/images/face.png" alt="Profile photo">
						</div>
						<a class="btn _small --download">Изменить ФОТО</a>
					</div>
					<!-- Main form -->
					<div class="form-wrap">
						<h5>Личные данные</h5>
						<form class="" action=""><!-- Start form -->
							
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="input3" type="text" name="" value="">
									<label class="label--yoshiko" for="input3">
											<span class="content--yoshiko" data-content="Фамилия">
												Фамилия
											</span>
									</label>
								</div>
							</div>
							
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="input4" type="text" name="" value="">
									<label class="label--yoshiko" for="input4">
											<span class="content--yoshiko" data-content="Имя">
												Имя
											</span>
									</label>
								</div>
							</div>
							
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="input5" type="text" name="" value="">
									<label class="label--yoshiko" for="input5">
											<span class="content--yoshiko" data-content="Отчество">
												Отчество
											</span>
									</label>
								</div>
							</div>
							
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="input30" type="tel" name="" value="">
									<label class="label--yoshiko" for="input30">
											<span class="content--yoshiko" data-content="Телефон">
												Телефон
											</span>
									</label>
								</div>
								<div class="checkbox">
									<input id="checkbox2" type="checkbox" name="" value="">
									<label for="checkbox2">Разрешить показ работодателю</label>
								</div>
							</div>
							
							
							
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="input31" type="text" name="" value="">
									<label class="label--yoshiko" for="input31">
											<span class="content--yoshiko" data-content="ИНН">
												ИНН (Ваш личный логин)
											</span>
									</label>
								</div>
								<div class="checkbox">
									<input id="checkbox3" type="checkbox" name="" value="">
									<label for="checkbox3">Разрешить показ работодателю</label>
								</div>
							</div>
						</form><!-- End form -->
						<a class="btn _small --download">Изменить</a>
					</div>
				</div><!-- End LEFT Form -->
				
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 right-card"><!-- Start Form -->
					<!-- Main form -->
					<div class="form-wrap">
						<h5>Резюме</h5>
						<form class="" action=""><!-- Start form -->
							
							<div class="form-item --simple">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="input6" type="date" name="" value="">
									<label class="label--yoshiko" for="input6">
											<span class="content--yoshiko" data-content="Дата рождения:">
												Дата рождения:
											</span>
									</label>
								</div>
							</div>
							
							<div class="form-item --simple">
								<div class="input--yoshiko">
									<select class="field--yoshiko" id="input7" name="">
										<option value="Москва">Москва</option>
										<option value="Москва">Москва</option>
										<option value="Москва">Москва</option>
									</select>
									<label class="label--yoshiko" for="input7">
											<span class="content--yoshiko" data-content="Регион проживания:">
												Регион проживания:
											</span>
									</label>
								</div>
							</div>
							
							<div class="form-item --simple">
								<div class="input--yoshiko">
									<textarea class="field--yoshiko" id="input8" type="text" name="" placeholder="(через запятую)"></textarea>
									<label class="label--yoshiko" for="input8">
											<span class="content--yoshiko" data-content="Образование:">
												Образование:
											</span>
									</label>
								</div>
							</div>
							
							<div class="form-item --simple">
								<div class="input--yoshiko">
									<textarea class="field--yoshiko" id="input9" name="" placeholder="(через запятую)"></textarea>
									<label class="label--yoshiko" for="input9">
											<span class="content--yoshiko" data-content="Предыдущие места работы:">
												Предыдущие места работы:
											</span>
									</label>
								</div>
							</div>
							
							<div class="form-item --simple">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="input10" type="text" name=""
									       placeholder="Например, '10 лет'">
									<label class="label--yoshiko" for="input10">
											<span class="content--yoshiko" data-content="Общий стаж:">
												Общий стаж:
											</span>
									</label>
								</div>
							</div>
							
							<div class="form-item --simple">
								<div class="input--yoshiko">
										<textarea class="field--yoshiko" id="input11" name=""
										          placeholder="Введите пожелания"></textarea>
									<label class="label--yoshiko" for="input11">
											<span class="content--yoshiko" data-content="Пожелания к будущей работе:">
												Пожелания к будущей работе:
											</span>
									</label>
								</div>
							</div>
						</form><!-- End form -->
						<a class="btn _small --download">Изменить</a>
					</div>
				
				</div><!-- End RIGHT Form -->
				
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<h4>МОИ УДОСТОВЕРЕНИЯ</h4>
					<div class="form-item --download-file --certifications">
						<div class="main-item">
							<div class="form-item --simple">
								<div class="checkbox">
									<input id="checkbox25" type="checkbox" name="" value="" checked>
									<label for="checkbox25">DIE Небольшие автобусы с прицепом</label>
								</div>
								<div class="input--yoshiko file-form">
									<label id="fileformlabel" class="item-field" for="input33"></label>
									<button type="button" name="" value="" class="btn _small --file">Выбрать</button>
									<input id="input33" class="field--yoshiko" type="file" name="fileupload" value="fileupload" onchange="getName(this.value);">
								</div>
							</div>
						</div>
						
						<div class="main-item">
							<div class="form-item --simple">
								<div class="checkbox">
									<input id="checkbox26" type="checkbox" name="" value="" checked>
									<label for="checkbox26">DIE Небольшие автобусы с прицепом</label>
								</div>
								<div class="input--yoshiko file-form">
									<label id="fileformlabel" class="item-field" for="input34"></label>
									<button type="button" name="" value="" class="btn _small --file">Выбрать</button>
									<input id="input34" class="field--yoshiko" type="file" name="fileupload" value="fileupload" onchange="getName(this.value);">
								</div>
							</div>
						</div>
						
						<a href="#add_certifications" class="btn _large --download">ЗАГРУЗИТЬ ЕЩЕ</a>
					</div>
				</div>
				
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<h4>ДАННЫЕ ОБ АТТЕСТАЦИИ</h4>
					<div class="form-item --attestation">
						<div class="checkbox">
							<input id="checkbox15" type="checkbox" name="" value="">
							<label for="checkbox15">Д.1. Гидротехнические сооружения объектов промышленности</label>
						</div>
						<div class="checkbox">
							<input id="checkbox16" type="checkbox" name="" value="">
							<label for="checkbox16">Д.2. Гидротехнические сооружения объектов энергетики</label>
						</div>
						<div class="checkbox">
							<input id="checkbox17" type="checkbox" name="" value="">
							<label for="checkbox17">Д.3. Гидротехнические сооружения объектов водохозяйственного</label>
						</div>
					</div>
					<a href="#" class="btn _large --download">ДОБАВИТЬ</a>
				</div>
			</div><!-- End row -->
		</div>
		<!-- End Private Area -->
	`
})

export class AreaApplicantComponent implements OnInit {
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