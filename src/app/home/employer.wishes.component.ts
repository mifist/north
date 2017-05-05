import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { User } from '../_models/index';

import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'app-wishes-employer',
    template: `
	    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
		    <!-- Start question -->
		    <div class="form-wrap">
			    <h4>Ваше пожелание</h4>
			    <form name="wishes_employer" #f="ngForm" novalidate>
				    <div class="form-item">
					    <div class="input--yoshiko">
						    <textarea class="field--yoshiko" id="wishesemployer"
						              (blur)="blurelCheck($event)"
						              name="wishesemployer"
						              [(ngModel)]="model.wishesemployer"></textarea>
						    <label class="label--yoshiko" for="wishesemployer">
								<span class="content--yoshiko" data-content="Введите ваше пожелание">
									Ваше пожелание
								</span>
						    </label>
					    </div>
				    </div>
				    <button [disabled]="loading" class="btn _large">Отправить</button>
				 
			    </form>
		
		    </div><!-- End choice pay -->
	
	    </div>
	`
})
export class WishesEmployerComponent implements OnInit {
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
	}

	ngOnInit() {
		this.loadAllUsers();
		this.loadUser(this.currentUser._id);
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