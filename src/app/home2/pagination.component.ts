import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-pagination',
    template: `
	    <div class="row">
		    <!-- Start pagination -->
		    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			
			    <div class="pagination-centered">
				    <ul class="pagination">
					    <li>
						    <a class="prev" href="#">
							    <span class="mbri-arrow-prev"></span>
						    </a>
					    </li>
					    <li class="current"><a href="#">1</a></li>
					    <li><a class="" href="#">2</a></li>
					    <li><a class="" href="#">3</a></li>
					    <li>
						    <a class="next" href="#">
							    <span class="mbri-arrow-next"></span>
						    </a>
					    </li>
				    </ul>
			    </div>
		    </div>
	    </div><!-- End pagination -->
    `
})

export class PaginationComponent {
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: ActivatedRoute) {}
}