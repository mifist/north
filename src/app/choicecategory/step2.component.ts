import { Component, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import { DataService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'step2.component.html',
    styleUrls: ['choicecategory.component.css']
})

export class ChoiceCategoryStep2Component {
    categores = [];
    categores_step2 = [];

    private id: number;
    private subscription: Subscription;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        private dataService: DataService
    ) {
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }

    ngOnInit() {
        this.categores = this.dataService.GetСategores();
        this.categores_step2 = this.dataService.GetСategores_step2();
    } 

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    goHome() {
        this.router.navigate(['/choicecategory']);
    }

    goStep2() {
        this.router.navigate(['/step2/']);
    }
}

