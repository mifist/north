import { Component, OnInit,  OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnDestroy {
    model: any = {};
    private id: number;
    private routeSubscription: Subscription;
    private timer;
    constructor( private router: Router,
                 private userService: UserService,
                 private alertService: ActivatedRoute) {
        this.routeSubscription = alertService.params.subscribe(params=>this.id=params['id']);
    }
    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }
}