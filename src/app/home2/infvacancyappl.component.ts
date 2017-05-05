import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-infvacancyappl',
    template: `
	    <div class="wrap__information">
		    <div class="row">
			    <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
				    <div class="wrap__likes">
					    <div class="row">
						    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							    <div class="likes__item mbri-like --like">6</div>
						    </div>
						    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							    <div class="likes__item mbri-like --dislike">1</div>
						    </div>
					    </div>
				    </div>
			    </div>
			    <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
				    <div class="row">
					    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						    <p>Общий рейтинг:</p>
					    </div>
					    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						    <span>4,15</span>
					    </div>
				    </div>
			    </div>
			    <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
				    <p>Дата</p>
				    <span class="wrap__date">28.01.2017</span>
			    </div>
		    </div>
	    </div>
    `
})

export class InfvacancyapplComponent {
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: ActivatedRoute) {}
}