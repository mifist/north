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

//***************************
    currentUser: User;
    users: User[] = [];

//***************************

    private id: number;
    private routeSubscription: Subscription;
    private timer;
    constructor( private router: Router,
                 private userService: UserService,
                 private alertService: ActivatedRoute) {
        this.routeSubscription = alertService.params.subscribe(params=>this.id=params['id']);
//***************************
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
//***************************
    }
    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }

//************************************************************************




    ngOnInit() {
        this.loadAllUsers();
        this.loadUser(this.currentUser._id);
        /*  this.loadel('input14');
          document.getElementById('input14').textContent
          document.getElementById('input14').parentElement.classList.add('input--filled');
          document.getElementById('input15').parentElement.classList.add('input--filled');
          el.target.parentNode.classList.add('input--filled');
          el.target.focus();id = "input14"
          console.log(this.model)*/
    }


    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers(); });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });

    }


    private loadUser(_id: string) {
        this.userService.getById(_id).subscribe(user => { this.model = user; });

    }

//************************************************************************







}