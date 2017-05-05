import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { User } from '../_models/index';

import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'app-vacancy-employer',
    template: `
	    <!-- Start Create Vaccine -->
	    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
		    <div class="row">
			    <div class="col-xs-12 12 col-md-12 col-lg-12">
				    <!-- Start creare of vaccine -->
				    <div class="form-wrap">
					    <h5>Создание вакансии</h5>
					    <form class="" action=""><!-- Start form -->
						    <div class="form-item --simple">
							    <div class="input--yoshiko">
								    <select class="field--yoshiko" id="input123" name="">
									    <option value="Направление 1">Направление 1</option>
									    <option value="Направление 2">Направление 2</option>
								    </select>
								    <label class="label--yoshiko" for="input123">
											<span class="content--yoshiko" data-content="Выберите направление:">
												Выберите направление:
											</span>
								    </label>
							    </div>
						    </div>
						    <div class="form-item">
							    <div class="input--yoshiko">
								    <select class="field--yoshiko" id="input124" name="">
									    <option value="Категория 1">Категория 1</option>
									    <option value="Категория 2">Категория 2</option>
								    </select>
								    <label class="label--yoshiko" for="input124">
											<span class="content--yoshiko" data-content="Выберите категорию из списка:">
												Выберите категорию из списка:
											</span>
								    </label>
							    </div>
						    </div>
						    <div class="form-item">
							    <div class="input--yoshiko">
								    <select class="field--yoshiko" id="input125" name="">
									    <option value="Подкатегория 1">Подкатегория 1</option>
									    <option value="Подкатегория 2">Подкатегория 2</option>
								    </select>
								    <label class="label--yoshiko" for="input125">
											<span class="content--yoshiko" data-content="Выберите подкатегорию:">
												Выберите подкатегорию:
											</span>
								    </label>
							    </div>
						    </div>
						    <div class="form-item">
							    <div class="input--yoshiko">
								    <input class="field--yoshiko" id="input151" type="text" name=""
								           value="">
								    <label class="label--yoshiko" for="input151">
											<span class="content--yoshiko" data-content="Укажите заработную плату от">
												Укажите заработную плату от
											</span>
								    </label>
							    </div>
						    </div>
						    <div class="form-item">
							    <div class="input--yoshiko">
								    <input class="field--yoshiko" id="input152" type="text" name=""
								           value="">
								    <label class="label--yoshiko" for="input152">
											<span class="content--yoshiko" data-content="Укажите заработную плату до">
												Укажите заработную плату до
											</span>
								    </label>
							    </div>
						    </div>
						    <div class="form-item">
							    <div class="input--yoshiko">
								    <textarea class="field--yoshiko" id="input281" name=""></textarea>
								    <label class="label--yoshiko" for="input281">
													<span class="content--yoshiko" data-content="Описание вакансии (будет отображаться для Соискателей)">
														Описание вакансии
													</span>
								    </label>
							    </div>
						    </div>
					    </form><!-- End form -->
				    </div>
			    </div><!-- End creare of vaccine -->
		    </div><!-- End row -->
		
		    <div class="row"><!-- Start row -->
			    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				    <!-- Start download video and photo -->
				    <h5>Прикрепите фото к вакансии</h5>
				    <div class="form-item --download-file">
					    <div class="main-item">
						    <div class="form-item --simple">
							    <div class="input--yoshiko file-form">
								    <label for="input32"></label>
								    <button type="button" name="" value="" class="btn _small --file">Выбрать</button>
								    <input id="input32" class="field--yoshiko" type="file" name="fileupload" value="fileupload" onchange="getName(this.value);">
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
					    </div>
				    </div>
			    </div><!-- End download video and photo -->
			    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				    <a href="#finish" class="btn _large">Опубликовать</a>
			    </div><!-- End button -->
		    </div><!-- End row -->
	    </div>
	    <!-- End Create Vaccine -->
	`
})
export class VacancyEmployerComponent implements OnInit {
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