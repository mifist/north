import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'choicecategory.component.html',
    styleUrls: ['choicecategory.component.css']
})

export class ChoiceCategoryComponent {
    model: any = {};
    loading = false;
    categores = [
        {
            id: '1',
            title: 'МЕХАНИЗМЫ И ТРАНСПОРТ',
            desc: '(авто, гусеничный, ж/д)',
        },
        {
            id: '2',
            title: 'СТРОИТЕЛЬСТВО',
            desc: '',
        },
        {
            id: '3',
            title: 'СВАРОЧНЫЕ ПРОИЗВОДСТВА',
            desc: '',
        },
        {
            id: '4',
            title: 'ЭЛЕКТРОХОЗЯЙСТВО',
            desc: '(эксплуатация, ремонт)',
        },
        {
            id: '5',
            title: 'СЛУЖБА БЫТА',
            desc: '',
        },
        {
            id: '6',
            title: 'НЕФТЕГАЗОВЫЙ КОМПЛЕКС',
            desc: '(разведка, бурение, добыча, эксплуатация)',
        },
        {
            id: '7',
            title: 'МЕД. ПЕРСОНАЛ',
            desc: '',
        }
    ];
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) {
    }

    blurel(el: any) {
       /* alert(el.target.value.trim()+"1");*/
        /*console.log(this.model);*/
        console.log(this.model);
       /* console.log(f.value); */
        if (el.target.value.trim() == '') {
            el.target.parentNode.classList.remove('input--filled');
        }
        else {
            el.target.parentNode.classList.add('input--filled');
        }

    }
    FooController(el: any) {
        console.log(this.model);

    }
    register() {
        console.log(this.model);
        this.loading = true;
       /* this.userService.create(this.model);*/
       /* console.log(this.model);*/
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

