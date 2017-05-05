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
						<form name="registerapplicant"><!-- Start form -->
							
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="lastNameApl" type="text" 
										   name="lastNameapl"
									       [(ngModel)]="model.lastNameApl"
									       (blur)="blurelCheck($event)" />
									<label class="label--yoshiko" for="lastNameApl">
								<span class="content--yoshiko" data-content="Фамилия">
									Фамилия
								</span>
									</label>
								</div>
							</div>
							
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="firstNameApl" type="text" 
										   name="firstNameApl"
									       [(ngModel)]="model.firstNameApl"
									       (blur)="blurelCheck($event)" />
									<label class="label--yoshiko" for="firstNameApl">
										<span class="content--yoshiko" data-content="Имя">
											Имя
										</span>
									</label>
								</div>
								
							</div>
							
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="middleNameApl" type="text" 
										   name="middleNameApl"
									       [(ngModel)]="model.middleNameApl"
									       (blur)="blurelCheck($event)" />
									<label class="label--yoshiko" for="middleNameApl">
										<span class="content--yoshiko" data-content="Отчество">
											Отчество
										</span>
									</label>
								</div>
								
							</div>
							
							<div class="form-item --requared">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="phoneApl" type="tel" 
										   name="phoneApl"
									       [(ngModel)]="model.phoneApl"
									       (blur)="blurelCheck($event)" />
									<label class="label--yoshiko" for="phoneApl">
										<span class="content--yoshiko" data-content="Телефон">
											Телефон
										</span>
									</label>
								</div>
								<div class="checkbox">
									<input id="applShowPhone" type="checkbox" 
										   name="applShowPhone"
									       [(ngModel)]="model.applShowPhone">
									<label for="applShowPhone">Разрешить показ работодателю</label>
								</div>
							
							</div>
							
							
							
							<div class="form-item">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="innApl" type="text" 
										   name="innApl"
									       [(ngModel)]="model.username"
									       (blur)="blurelCheck($event)"
									       (keyup)="keyupel($event)"
									/>
									<label class="label--yoshiko" for="innApl">
										<span class="content--yoshiko" data-content="ИНН (Ваш личный логин)">
											ИНН (Ваш личный логин)
										</span>
									</label>
								</div>
								
								<div class="checkbox">
									<input id="applShowInn" type="checkbox" 
										   name="applShowInn"
									       [(ngModel)]="model.applShowInn">
									<label for="applShowInn">Разрешить показ работодателю</label>
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
						<form name="resumeapplicant"><!-- Start form -->
							<div class="form-item --simple">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="DOB" type="date" 
										   name="DOB"
									       [(ngModel)]="model.DOB"
									       (blur)="blurelCheck($event)">
									<label class="label--yoshiko" for="DOB">
										<span class="content--yoshiko" data-content="Дата рождения:">
											Дата рождения:
										</span>
									</label>
								</div>
							</div>
							
							<div class="form-item --simple">
								<div class="input--yoshiko">
									<select class="field--yoshiko" id="accommodation" 
											name="accommodation"
									        [(ngModel)]="model.accommodation"
									        (blur)="blurelCheck($event)">
										<option *ngFor="let accommodation of accommodations" [value]="accommodation">
											{{ accommodation }}
										</option>
									</select>
									<label class="label--yoshiko" for="accommodation">
										<span class="content--yoshiko" data-content="Регион проживания:">
											Регион проживания:
										</span>
									</label>
								</div>
							</div>
							
							<div class="form-item --simple">
								<div class="input--yoshiko">
							<textarea class="field--yoshiko" id="enterEducation" type="text" 
									  name="enterEducation"
							          [(ngModel)]="model.enterEducation"
							          (blur)="blurelCheck($event)"
							          placeholder="(через запятую)"></textarea>
									<label class="label--yoshiko" for="enterEducation">
										<span class="content--yoshiko" data-content="Образование:">
											Образование:
										</span>
									</label>
								</div>
							</div>
							
							<div class="form-item --simple">
								<div class="input--yoshiko">
							<textarea class="field--yoshiko" id="previousJobs" 
									  name="previousJobs"
							          [(ngModel)]="model.previousJobs"
							          (blur)="blurelCheck($event)"
							          placeholder="(через запятую)"></textarea>
									<label class="label--yoshiko" for="previousJobs">
										<span class="content--yoshiko" data-content="Предыдущие места работы:">
											Предыдущие места работы:
										</span>
									</label>
								</div>
							</div>
							
							<div class="form-item --simple">
								<div class="input--yoshiko">
									<input class="field--yoshiko" id="enterExperience" type="text" 
										   name="enterExperience"
									       [(ngModel)]="model.enterExperience"
									       (blur)="blurelCheck($event)"
									       placeholder="Например, '10 лет'">
									<label class="label--yoshiko" for="enterExperience">
										<span class="content--yoshiko" data-content="Общий стаж:">
											Общий стаж:
										</span>
									</label>
								</div>
							</div>
							
							<div class="form-item --simple">
								<div class="input--yoshiko">
							<textarea class="field--yoshiko" id="wishesWork" 
									  name="wishesWork"
							          [(ngModel)]="model.wishesWork"
							          (blur)="blurelCheck($event)"
							          placeholder="Введите пожелания"></textarea>
									<label class="label--yoshiko" for="wishesWork">
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
	loadel(ss: string) { let yyy: HTMLInputElement; if ((<HTMLInputElement>document.getElementById(ss)).value.trim() === '') { document.getElementById(ss).parentElement.classList.remove('input--filled'); } else { document.getElementById(ss).parentElement.classList.add('input--filled'); } }


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
	};
	ngAfterViewInit() {
		this.timer = setTimeout(() => this.timerf(), 500);
	};
	timerf() {
		this.loadel('lastNameApl');
		this.loadel('firstNameApl');
		this.loadel('middleNameApl');
		this.loadel('phoneApl');
		this.loadel('applShowPhone');
		this.loadel('innApl');
		this.loadel('applShowInn');
		this.loadel('passwordAppl');

		this.loadel('DOB');
		this.loadel('accommodation');
		this.loadel('enterEducation');
		this.loadel('previousJobs');
		this.loadel('enterExperience');
		this.loadel('wishesWork');

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