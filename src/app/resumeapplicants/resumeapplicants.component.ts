﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {DataService, AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'resumeapplicants.component.html'
    //styleUrls: ['resumeapplicants.component.css']
})

export class ResumeApplicantComponent {
    model: any = {};
    loading = false;
    accommodations = ['Абаза', 'Абакан', 'Абдулино', 'Москва', 'Санкт-Петербург'];

    constructor(
        private router: Router,
        private userService: UserService,
        private dataService: DataService,
        private alertService: AlertService) { }

   
    //model = {};
    //this.model = {};
    ngOnInit() { 
        this.model = this.dataService.GetModelPart1();
    }


    blurel(el: any) {
        //alert(el.target.value.trim()+"1");
        //console.log(this.model);
        
        console.log(this.model);
        //console.log(f.value); 
        if (el.target.value.trim() == '') {
            el.target.parentNode.classList.remove('input--filled');
        }
        else {
            el.target.parentNode.classList.add('input--filled');
        }

    }


    register() {
        console.log(this.model);
        this.loading = true;
        //this.userService.create(this.model);
        //console.log(this.model);
        console.log('----------');

        this.userService.create(this.model)
            .subscribe(
            data => {
                    console.log(this.model);
                    console.log(data);

                    this.alertService.success('Регистрация прошла успешно', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
        
    }
}
