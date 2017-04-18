import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'choicecategory.component.html'
   /* styleUrls: ['choicecategory.component.css']*/
})


export class ChoiceCategoryComponent {
    model: any = {};
    loading = false;
    categores = [
        {
            title: 'МЕХАНИЗМЫ И ТРАНСПОРТ',
            desc: '(авто, гусеничный, ж/д)',
        },
        {
            title: 'СТРОИТЕЛЬСТВО',
            desc: '',
        },
        {
            title: 'СВАРОЧНОЕ ПРОИЗВОДСТВО',
            desc: '',
        },
        {
            title: 'ЭЛЕКТРОХОЗЯЙСТВО',
            desc: '(эксплуатация, ремонт)',
        },
        {
            title: 'СЛУЖБА БЫТА',
            desc: '',
        },
        {
            title: 'НЕФТЕГАЗОВЫЙ КОМПЛЕКС',
            desc: '(разведка, бурение, добыча, эксплуатация)',
        },
        {
            title: 'МЕД. ПЕРСОНАЛ',
            desc: '',
        }
    ];

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

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
