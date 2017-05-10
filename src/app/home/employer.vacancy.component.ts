import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';


import { User } from '../_models/index';

import { UserService, DataService } from '../_services/index';


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
						    <div class="form-item">
							    <div class="input--yoshiko">
								    <select class="field--yoshiko" id="categor"
								            #categor="ngModel"
								            [(ngModel)]="model.categor" 
											name="categores"
								            (blur)="blurelCheck($event)"
								            (change)="changecategoryid($event)">
									    <option *ngFor="let category of categores"
												[value]="category.id">{{ category.title }}</option>
								    </select>
								    <label class="label--yoshiko" for="categor">
											<span class="content--yoshiko" data-content="Выберите направление:">
												Выберите направление:
											</span>
								    </label>
							    </div>
						    </div>
						    <div class="form-item ">
							    <div class="input--yoshiko">
								    <select class="field--yoshiko" id="categores2"
								            #categor_step2222="ngModel"
								            [(ngModel)]="model.categores_step2"
								            name="categores_step2"
								            (blur)="blurelCheck($event)" 
											(change)="changecategoryid2($event)">
									
									    <ng-container *ngFor="let category_step2 of categores_step2" >
										    <option *ngIf="category_step2.idcat === categoresid"
										            [value]="category_step2.id">
											    {{ category_step2.title }}
										    </option>
									    </ng-container>
								
								    </select>
								    <label class="label--yoshiko" for="categores2">
										<span class="content--yoshiko" data-content="Выберите категорию из списка:">
											Выберите категорию из списка:
										</span>
								    </label>
							    </div>
						    </div>
						    <div class="form-item">
							    <div class="input--yoshiko">
								    <select class="field--yoshiko" id="categores3"
								            #categor_step3="ngModel"
								            [(ngModel)]="model.categores_step3"
								            name="categores_step3"
								            (blur)="blurelCheck($event)">
									    <ng-container *ngFor="let category_step3 of categores_step3" >
										    <option *ngIf="category_step3.idcat2 === categoresid2"
										            [value]="category_step3.id">
											    {{ category_step3.title }}
										    </option>
									    </ng-container>
									   
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
								    <input class="field--yoshiko" id="wagesFrom" type="text" 
										   (blur)="blurelCheck($event)"
								           name="wagesFrom"
								           #wagesFrom="ngModel"
								           [(ngModel)]="model.wagesFrom">
								    <label class="label--yoshiko" for="wagesFrom">
										<span class="content--yoshiko" data-content="Укажите заработную плату от">
											Укажите заработную плату от
										</span>
								    </label>
							    </div>
						    </div>
						    <div class="form-item">
							    <div class="input--yoshiko">
								    <input class="field--yoshiko" id="wagesTo" type="text"  
										   (blur)="blurelCheck($event)"
								           name="wagesTo"
								           #wagesTo="ngModel"
								           [(ngModel)]="model.wagesTo">
								    <label class="label--yoshiko" for="wagesTo">
											<span class="content--yoshiko" data-content="Укажите заработную плату до">
												Укажите заработную плату до
											</span>
								    </label>
							    </div>
						    </div>
						    <div class="form-item">
							    <div class="input--yoshiko">
								    <textarea class="field--yoshiko" id="vacanDesc"
								              (blur)="blurelCheck($event)"
								              name="vacanDesc"
								              #vacanDesc="ngModel"
								              [(ngModel)]="model.vacanDesc"></textarea>
								    <label class="label--yoshiko" for="vacanDesc">
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
								    <label for="uplvacanEmlImg"></label>
								    <button type="button" name="" value="" class="btn _small --file">Выбрать</button>
								    <input id="uplvacanEmlImg" class="field--yoshiko" type="file"
								           (blur)="blurelCheck($event)"
								           name="uplvacanEmlImg"
								           #uplvacanEmlImg="ngModel"
								           [(ngModel)]="model.uplvacanEmlImg"
										   onchange="getName(this.value);">
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
					<button class="btn _large">Опубликовать</button>
			    </div><!-- End button -->
		    </div><!-- End row -->
	    </div>
	    <!-- End Create Vaccine -->
	`
})
export class VacancyEmployerComponent implements OnInit {
	model: any = {};
	loading = false;
	currentUser: User;
	users: User[] = [];
	categoresid : number;
	categoresid2 : number;
	categores = [];
	categores_step2 = [];
	categores_step3 = [];
	private timer;
	constructor(
		private router: Router,
		private userService: UserService,
		private dataService: DataService,
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

	changecategoryid(eventel: any) {
		let id = eventel.target.value;
		this.categoresid = this.categores[id-1].id;
	}
	changecategoryid2(eventel: any) {
		let id = eventel.target.value;
		this.categoresid2 = this.categores_step2[id-1].id;
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
		this.categores = this.dataService.GetСategores();
		this.categores_step2 = this.dataService.GetСategores_step2();
		this.categores_step3 = this.dataService.GetСategores_step3();
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