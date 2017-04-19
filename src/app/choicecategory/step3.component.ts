import { Component, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import { AlertService, UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'step3.component.html',
    styleUrls: ['choicecategory.component.css']
})

export class ChoiceCategoryStep3Component {
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
            title: 'СВАРОЧНОЕ ПРОИЗВОДСТВО',
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
    categores_step2 = [
        {
            id: '1',
            idcat: '1',
            title: 'Руководители, ИТР, служащие',
            desc: '',
        },
        {
            id: '2',
            idcat: '1',
            title: 'Слесаря',
            desc: '',
        },
        {
            id: '23',
            idcat: '1',
            title: 'Водители',
            desc: '',
        },
        {
            id: '24',
            idcat: '1',
            title: 'Машинисты колёсной спец. техники',
            desc: '',
        },
        {
            id: '25',
            idcat: '1',
            title: 'Трактористы - машинисты',
            desc: '',
        },
        {
            id: '26',
            idcat: '1',
            title: 'Машинисты гусеничной спецтехники',
            desc: '',
        },
        {
            id: '27',
            idcat: '1',
            title: 'Машинисты ж/д транспорта',
            desc: '',
        },
        {
            id: '28',
            idcat: '1',
            title: 'Машинисты установок',
            desc: '(ДЭС, насосных и тп.)',
        },
        {
            id: '29',
            idcat: '2',
            title: 'Общестроительные работы',
            desc: '',
        },
        {
            id: '210',
            idcat: '2',
            title: 'Технология',
            desc: '',
        },
        {
            id: '211',
            idcat: '2',
            title: 'Электромонтаж',
            desc: '',
        },
        {
            id: '212',
            idcat: '3',
            title: 'Руководители, ИТР, служащие',
            desc: '',
        },
        {
            id: '213',
            idcat: '3',
            title: 'Рабочие профессии',
            desc: '',
        },
        {
            id: '214',
            idcat: '',
            title: '',
            desc: '',
        }
    ];
    categores_step3 = [
        {
            id: '1',
            idcat2: '1',
            title: 'Начальник транспортного цеха',
            desc: '',
        },
        {
            id: '2',
            idcat2: '1',
            title: 'Главный механик',
            desc: '',
        },
        {
            id: '3',
            idcat2: '1',
            title: 'Механик',
            desc: '',
        },
        {
            id: '4',
            idcat2: '1',
            title: 'Диспетчер',
            desc: '',
        },
        {
            id: '5',
            idcat2: '',
            title: '',
            desc: '',
        },
        {
            id: '6',
            idcat2: '',
            title: '',
            desc: '',
        },
        {
            id: '7',
            idcat2: '',
            title: '',
            desc: '',
        },
        {
            id: '8',
            idcat2: '',
            title: '',
            desc: '',
        },
        {
            id: '9',
            idcat2: '',
            title: '',
            desc: '',
        },
        {
            id: '10',
            idcat2: '',
            title: '',
            desc: '',
        },
        {
            id: '11',
            idcat2: '',
            title: '',
            desc: '',
        },
        {
            id: '12',
            idcat2: '',
            title: '',
            desc: '',
        },
        {
            id: '13',
            idcat2: '',
            title: '',
            desc: '',
        },
        {
            id: '14',
            idcat2: '',
            title: '',
            desc: '',
        },
    ];
    private count: number;
    private id: number;
    private subscription: Subscription;
    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router
    ) {

        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    goHome() {
        this.router.navigate(['/choicecategory']);
        console.log(this.model);
    }
    categoresStep3Count(el: any) {
        //let count = 0;
        return 'model.' +  this.count++;

    }

  /*  increment() {
        this.model.count++;
    }
    decrement() {
        this.count--;
    }*/

}

