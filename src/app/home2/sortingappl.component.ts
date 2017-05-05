import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-sortingappl',
    template: `
	    <!-- Start sorting -->
	    <div class="row">
		    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
			    <div class="sorting">
				    <h6>Сортировать по рейтингу:</h6>
				    <a class="mbri-up" href="#"></a>
				    <a class="mbri-down" href="#"></a>
			    </div>
		    </div>
		    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
			    <div class="sorting">
				    <h6>Сортировать по з/п:</h6>
				    <a class="mbri-up" href="#"></a>
				    <a class="mbri-down" href="#"></a>
			    </div>
		    </div>
	    </div><!-- End sorting -->
    `
})

export class SortingapplComponent {
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: ActivatedRoute) {}
}