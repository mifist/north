import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-applicantlist',
    template: `
	    <div class="wrap__applicants-list">
		    <h5>Список предложений:</h5>
		    <ul>
			    <li><a [routerLink]="[ 'view_applicant' ]">Иванов Иван Иванович 1</a></li>
			    <li><a [routerLink]="[ 'view_applicant' ]">Иванов Иван Иванович 2</a></li>
		    </ul>
	    </div>
    `
})

export class ApplicantlistComponent {
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: ActivatedRoute) {}
}