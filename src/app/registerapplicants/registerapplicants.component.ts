import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService, AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'registerapplicants.component.html'
    //styleUrls: ['registerapplicants.component.css']
})

export class RegisterApplicantComponent {
    model: any = {};
    loading = false;
    helpblockvalue = 'Заполните обязательное поле';
    errorINN = '';

    constructor(
        private router: Router,
        private userService: UserService,
        private dataService: DataService,
        private alertService: AlertService) { }


    checkINN(inputNumber: any) {
        //преобразуем в строку
        inputNumber = "" + inputNumber;
        //преобразуем в массив
        inputNumber = inputNumber.split('');
        //для ИНН в 10 знаков
        if ((inputNumber.length == 10) && (inputNumber[9] == ((2 * inputNumber[0] + 4 * inputNumber[1] + 10 * inputNumber[2] + 3 * inputNumber[3] + 5 * inputNumber[4] + 9 * inputNumber[5] + 4 * inputNumber[6] + 6 * inputNumber[7] + 8 * inputNumber[8]) % 11) % 10)) {
            return true;
            //для ИНН в 12 знаков
        } else if ((inputNumber.length == 12) && ((inputNumber[10] == ((7 * inputNumber[0] + 2 * inputNumber[1] + 4 * inputNumber[2] + 10 * inputNumber[3] + 3 * inputNumber[4] + 5 * inputNumber[5] + 9 * inputNumber[6] + 4 * inputNumber[7] + 6 * inputNumber[8] + 8 * inputNumber[9]) % 11) % 10) && (inputNumber[11] == ((3 * inputNumber[0] + 7 * inputNumber[1] + 2 * inputNumber[2] + 4 * inputNumber[3] + 10 * inputNumber[4] + 3 * inputNumber[5] + 5 * inputNumber[6] + 9 * inputNumber[7] + 4 * inputNumber[8] + 6 * inputNumber[9] + 8 * inputNumber[10]) % 11) % 10))) {
            return true;
        } else {
            return false;
        }
    } 


    blurel(el: any) {
        //let tt: any = this.checkINN(el.target.value);
        //console.log(tt);
        //alert(el.target.value.trim()+"1");
        //console.log(this.model);
        console.log(this.model);
        
        if (el.target.value.trim() == '') {
            el.target.parentNode.classList.remove('input--filled');
            this.errorINN = '';
            return;
        }
        else {
            el.target.parentNode.classList.add('input--filled');
        }

        //let s: string = '';

        
        if (el.target.id == 'innApl') {
            //s = el.target.value;
            //console.log(el.target);
            console.log(el.target.value.length);
            //if (el.target.value.length != 12) {
            if (!this.checkINN(el.target.value)) {
            
                this.errorINN = 'ИНН некорректный';
                el.target.focus();
            } else {
                this.errorINN = '';
            }
        }
        

    }


    more() {
        console.log(this.model);
        this.loading = true;
        //this.userService.create(this.model);
        //console.log(this.model);
        console.log('----------');
        this.dataService.SendModelPart1(this.model);
        this.router.navigate(['/resumeapplicants']);
/*
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
*/
        
    }

    keyupel(el) {
        if (el.target.id == 'innApl') {
            if (!this.checkINN(el.target.value)) {
                this.errorINN = 'ИНН некорректный';
            } else {
                this.errorINN = '';
            }
        }
    }
}
