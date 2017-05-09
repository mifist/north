import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',

styles: [` 
.form-control::-moz-placeholder {
  color: Gray;
  opacity: 1;
}

.form-control:-ms-input-placeholder {
  color: Gray;
}

.form-control::-webkit-input-placeholder {
  color: Gray;
}

.help-block{
  color: Red;
}
    `]


})

export class LoginComponent implements OnInit {
    model: any = {};
    //model2: any = {};
    loading = false;
    returnUrl: string;
    returnApplicantUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private userService: UserService
        ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';


        this.returnApplicantUrl = this.route.snapshot.queryParams['returnUrl'] || '/home2/00/cabinet_applicant';
        //alert(this.returnApplicantUrl);
    }

    login() {
        console.log(this.model);
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
            data => {
                    //alert(data);
                    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    
                    this.userService.getById(currentUser._id).subscribe(user => {
                        if ("kpp" in user) this.router.navigate([this.returnUrl]);
                        else this.router.navigate([this.returnApplicantUrl]);  
                        //console.log(user);
                        //this.model2 = user;
                    });
                    //if (this.model2)
                    //console.log(this.model2);
                    //alert("kpp" in this.model2);
                    //this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}
