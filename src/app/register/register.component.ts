import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    formowns = ['Форма собственности 1', 'Форма собственности 2', 'Форма собственности 3'];
    errorINN = '';

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) {
    }
    loadel(ss: string) {
        /* alert(ss);
         console.log((<HTMLInputElement>document.getElementById(ss)).value);*/
        let yyy: HTMLInputElement;

        if ((<HTMLInputElement>document.getElementById(ss)).value.trim() === '') {
            /* el.parentElement.classList.remove('input--filled');*/
            document.getElementById(ss).parentElement.classList.remove('input--filled');
        }
        else {
            /* el.parentElement.classList.add('input--filled');*/
            document.getElementById(ss).parentElement.classList.add('input--filled');
        }

    }

    blurel(el: any) {
        console.log(this.model);
        if (el.target.value.trim() === '') {
            el.target.parentNode.classList.remove('input--filled');
            this.errorINN = '';
            return;
        }
        else {
            el.target.parentNode.classList.add('input--filled');
        }
        if (el.target.id == 'inputusername') {
            console.log(el.target.value.length);
            if (!this.checkINN(el.target.value)) {
                this.errorINN = 'ИНН некорректный';
                el.target.focus();
            } else {
                this.errorINN = '';
            }
        }
    }




    checkINN(inputNumber: any) {
       /* преобразуем в строку*/
        inputNumber = "" + inputNumber;
        /*преобразуем в массив*/
        inputNumber = inputNumber.split('');
        /*для ИНН в 10 знаков*/
        if ((inputNumber.length == 10) && (inputNumber[9] == ((2 * inputNumber[0] + 4 * inputNumber[1] + 10 * inputNumber[2] + 3 * inputNumber[3] + 5 * inputNumber[4] + 9 * inputNumber[5] + 4 * inputNumber[6] + 6 * inputNumber[7] + 8 * inputNumber[8]) % 11) % 10)) {
            return true;
            /*для ИНН в 12 знаков*/
        } else if ((inputNumber.length == 12) && ((inputNumber[10] == ((7 * inputNumber[0] + 2 * inputNumber[1] + 4 * inputNumber[2] + 10 * inputNumber[3] + 3 * inputNumber[4] + 5 * inputNumber[5] + 9 * inputNumber[6] + 4 * inputNumber[7] + 6 * inputNumber[8] + 8 * inputNumber[9]) % 11) % 10) && (inputNumber[11] == ((3 * inputNumber[0] + 7 * inputNumber[1] + 2 * inputNumber[2] + 4 * inputNumber[3] + 10 * inputNumber[4] + 3 * inputNumber[5] + 5 * inputNumber[6] + 9 * inputNumber[7] + 4 * inputNumber[8] + 6 * inputNumber[9] + 8 * inputNumber[10]) % 11) % 10))) {
            return true;
        } else {
            return false;
        }
    }
    onKeyUp() {
        /*console.log(this.model);*/
    }
    register() {
        console.log(this.model);
        this.loading = true;
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
    keyupel(el) {
        if (el.target.id === 'inputusername') {
            if (!this.checkINN(el.target.value)) {
                this.errorINN = 'ИНН некорректный';
            } else {
                this.errorINN = '';
            }
        }
    }

}
