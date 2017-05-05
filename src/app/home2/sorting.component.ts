import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-sorting',
    template: `
	    <div class="sorting">
		    <h6>Сортировать по дате:</h6>
		    <a class="mbri-up" href="#"></a>
		    <a class="mbri-down" href="#"></a>
	    </div>
    `
})

export class SortingComponent {
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: ActivatedRoute) {}
}