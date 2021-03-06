﻿import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-button-applicant',
    template: `
	    <footer class="wrap__button">
		    <div class="row">
			    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				    <div class="btn _large --event">
					    <span>Вы уже откликнулись на эту вакансию</span>
				    </div>
			    </div>
		    </div>
		    <div class="row">
			    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
				    <div class="btn _large --event-orange">
					    <span>Вас пригласили к собеседованию</span>
				    </div>
			    </div>
			    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
				    <a href="#respond" class="btn _large --like">Принять приглашение</a>
			    </div>
		    </div>
	
	    </footer>
    `
})

export class ButtonApplicantComponent {
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: ActivatedRoute) {}
}