import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    model: any = {};
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //console.log(this.currentUser);
    }


    blurelCheck(el: any) {
        console.log(this.model);
        if (el.target.value.trim() == '') {
            el.target.parentNode.classList.remove('input--filled');
        }
        else {
            el.target.parentNode.classList.add('input--filled');
        }

    }
    ngOnInit() {
        this.loadAllUsers();

        this.loadUser(this.currentUser._id);
        //console.log(this.model)
    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users});

    }


    private loadUser(_id: string) {
        this.userService.getById(_id).subscribe(user => { this.model = user });

    }

}