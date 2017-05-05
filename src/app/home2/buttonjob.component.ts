import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-button-job-applicant',
    template: `
	    <footer class="wrap__button">
		    <div class="row">
			    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				    <div class="btn _large --event">
					    <span>Вас пригласили к собеседованию</span>
				    </div>
			    </div>
		    </div>
		    <div class="row">
			    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
										<span class="btn _large --event-orange">
											<span>Всего откликнулось: <span>3</span></span>
										</span>
			    </div>
			    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
				    <a href="vaccine_single--applicant.html" class="btn _large --like">Подробнее</a>
			    </div>
		    </div>
	
	    </footer>
    `
})

export class ButtonJobApplicantComponent {
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: ActivatedRoute) {}
}