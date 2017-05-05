import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { User } from '../_models/index';

import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'app-head-employer',
    template: `
	    <div class="row area-inf">
		    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 area-inf__item">
			    <p>ИНН: <span>{{model.username}}</span></p>
		    </div>
		    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 area-inf__item">
			    <h5>{{model.firstName}}</h5>
		    </div>
		    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 area-inf__item">
			    <div class="area-inf__purse">
				    <i class="mbri-cash"></i><span>00.00 руб</span>
			    </div>
		    </div>
	    </div>
	`
})

export class HeadEmployerComponent implements OnInit {
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