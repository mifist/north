import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-buttonempl',
    template: `
	    <footer class="wrap__button">
		    <div class="row">
			    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				    <div class="wrap__offers">
					    <a href="vaccine_single--employer.html" class="btn"><span>10</span> предложений</a>
				    </div>
			    </div>
			    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
				    <a href="vaccine_single--employer.html" class="btn _large --like">Подробнее</a>
			    </div>
			    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
				    <a href="#" class="btn _large --dislike">Удалить вакансию</a>
			    </div>
		    </div>
	    </footer>
    `
})

export class ButtonemplComponent {
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: ActivatedRoute) {}
}